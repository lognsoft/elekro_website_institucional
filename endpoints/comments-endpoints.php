<?php

function elekro_get_comments(WP_REST_Request $req):WP_Error | WP_REST_Response{

    try{

        $slug = $req->get_param('slug');
        // Obter o ID do post pelo slug
        $post = get_page_by_path($slug, OBJECT, 'post');
        if (!$post) {
            return rest_ensure_response(new WP_Error(
                'invalid_post',
                'O post especificado não foi encontrado.',
                ['status' => 404]
            ));
        }

        $post_id = $post->ID;

        // Obter todos os comentários do post
        $comments = get_comments([
            'post_id' => $post_id,
            'status'  => 'approve',
            'orderby' => 'comment_date',
            'order'   => 'ASC',
        ]);

        // Converter os comentários em uma estrutura de mapa por ID
        $comment_map = [];
        foreach ($comments as $comment) {
            $comment_map[$comment->comment_ID] = [
                'id'      => $comment->comment_ID,
                'author'  => $comment->comment_author,
                'content' => $comment->comment_content,
                'date'    => $comment->comment_date,
                'parent'  => (int) $comment->comment_parent,
            ];
        }

        // Construir a estrutura final para comentários principais
        $nested_comments = [];
        foreach ($comment_map as $id => $comment) {
            if ($comment['parent'] === 0) {
                $comment['replies'] = findReplies($comment_map, $id);
                $nested_comments[] = $comment;
            }
        }

        return new WP_REST_Response($nested_comments,200);

    }catch(Exception $e){
        return new WP_Error(
            "server_error",
            $e->getMessage(),
            ["status" => 500]
        );
    }
}

function elekro_new_comment($request) {
    // Pega os dados do corpo da requisição
    $params = $request->get_params();

    // Validação básica
    if (empty($params['post_id']) || empty($params['author']) || empty($params['content'])) {
        return rest_ensure_response(new WP_Error(
            'missing_data',
            'Os campos post_id, author e content são obrigatórios.',
            ['status' => 400]
        ));
    }

    // Sanitiza os dados
    $post_id  = absint($params['post_id']);
    $author   = sanitize_text_field($params['author']);
    $content  = sanitize_textarea_field($params['content']);
    $email    = isset($params['email']) ? sanitize_email($params['email']) : '';
    $parent_id   = isset($params['parent_id']) ? absint($params['parent_id']) : 0;

    // Verifica se o post existe
    if (!get_post($post_id)) {
        return rest_ensure_response(new WP_Error(
            'invalid_post',
            'O post especificado não existe.',
            ['status' => 404]
        ));
    }

    // Prepara os dados do comentário
    $comment_data = [
        'comment_post_ID' => $post_id,
        'comment_author' => $author,
        'comment_author_email' => $email,
        'comment_content' => $content,
        'comment_parent' => $parent_id,
        'comment_type' => '',
        'comment_approved' => 1, // Comentários aguardando aprovação
    ];

    // Insere o comentário
    $comment_id = wp_insert_comment($comment_data);

    if (is_wp_error($comment_id)) {
        return rest_ensure_response(new WP_Error(
            'comment_failed',
            'Erro ao criar o comentário.',
            ['status' => 500]
        ));
    }

    return rest_ensure_response([
        'success'    => true,
        'message'    => 'Comentário enviado com sucesso, aguardando aprovação.',
        'comment_id' => $comment_id,
    ]);
}

function elekro_register_endpoints_comments(): void {
    register_rest_route("api/v1", "/comments", array(
        "methods" => "GET",
        "callback" => "elekro_get_comments",
        "permission_callback" => "__return_true",
        "args" => array(
            "slug" => array(
                "required" => true,
                "validate_callback" => function($param): bool {
                    return is_string($param);
                },
                "description" => "Para buscar comentários de um determinado post"
            )
        )
    ));
    register_rest_route("api/v1", "/comment", array(
        "methods" => "POST",
        "callback" => "elekro_new_comment",
        "permission_callback" => "__return_true"
    ));
}
add_action("rest_api_init", "elekro_register_endpoints_comments");