<?php

add_image_size("elekro_card", 733, 322);

function elekro_add_support():void {
    add_theme_support("post-thumbnails");
}
add_action("after_setup_theme","elekro_add_support");

// function elekro_token_expire():int {
//     return time() + (60 * 60 * 24 * 3);
// }
// add_action("jwt_auth_expire", "elekro_token_expire");

// Função de mapeamento e retorno apenas dos valores necessários para tags e categorias
function elekro_map_categories_and_tags(array $data_array):array {
    return array_map(function($val){
        return array(
            "slug" => $val->slug,
            "name" => $val->name,
            "count" => $val->count
        );
    },$data_array);
}

// Incrementador de visualizações de post
function elekro_view_count_post(int $post_id):void{

    $views_atual = get_post_meta($post_id, "post_views_count", true);

    if($views_atual === ""){
        add_post_meta($post_id, "post_views_count", 1);
    } else {
        $count = (int)$views_atual;
        $count++;
        update_post_meta($post_id, "post_views_count", $count);
    }
}


// Filtro de resultado de posts
function elekro_filter_posts(array $params):array{
    $args = array();
    $args["post_type"] = (isset($params["type"]) || !empty($params["type"])) && post_type_exists($params["type"]) ? sanitize_text_field($params["type"]) : "post";

    if(isset($params['limit']) && !empty($params['limit']) && is_int((int)$params['limit'])){
        $args["posts_per_page"] = sanitize_text_field($params['limit']);
    }

    //Verifica se o campo de categoria esta presente na query, se não está vazio e se o valor informado corresponde a uma categoria válida
    if((isset($params["category"]) || !empty($params["category"])) && term_exists($params["category"], 'category')){
        $args["category_name"] = sanitize_text_field($params["category"]);
    }

    if((isset($params["tag"]) || !empty($params["tag"]))){
        $tags = $params["tag"];
        if(is_array($tags)){
            $tags = array_filter($tags, function($tag) {
                if(term_exists($tag, 'post_tag')){
                    return sanitize_text_field($tag);
                }
            });
            $tags = implode(",", $tags);
        } else {
            if(term_exists($tags, 'post_tag')){
                $tags = sanitize_text_field($tags);
            }
        }
        
        if(!empty($tags)) $args["tag"] = $tags;
    }

    if(isset($params["search"]) || !empty($params["search"])){
        $args["s"] = sanitize_text_field($params["search"]);
    }

    if(isset($params["page"]) || !empty($params["page"])){
        $args["paged"] = $params["page"];
    }
    

    return $args;
}

add_action('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function ($value) {
        $allowed_origins = ['https://elekro.com.br'];
        $origin = get_http_origin();

        if (in_array($origin, $allowed_origins)) {
            header("Access-Control-Allow-Origin: $origin");
        }
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
        header('Access-Control-Allow-Credentials: true');
        return $value;
    });
});


function elekro_custom_login_logo():void {
?>
<style type="text/css">
    body.login h1 a {
        background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/logo.png');
        background-size: contain; /* Ajusta o tamanho da imagem automaticamente */
        background-position: center;
        width: 100%;
        height: 84px; /* Ajuste a altura conforme necessário */
        border-radius: 10px;
    }
    body.login  #wp-submit{
        background-color: #0171E3;
        border-radius: 50px;
    }
    body.login input[type=text],
    body.login input[type=password]{
        outline: none;
        border: 1px solid black;
    }

    body.login input[type=text]::focus,
    body.login input[type=password]::focus{
        border: 2px solid #0171E3
    }
</style>
<?php
}
add_action('login_head', 'elekro_custom_login_logo');


// Função para buscar respostas, incluindo respostas de respostas
function findReplies($comment_map, $parent_id) {
    $replies = [];
    foreach ($comment_map as $id => $comment) {
        $parent_comment = get_comment($parent_id);

        if ($comment['parent'] === $parent_id) {
            $comment['reply_to'] = $parent_comment->comment_author;
            $replies[] = $comment;
            $child_replies = findReplies($comment_map, $id);
            $replies = array_merge($replies, $child_replies);
        }
    }
    return $replies;
}

$dir_theme = get_template_directory();

require "$dir_theme/endpoints/post-endpoints.php";
require "$dir_theme/endpoints/comments-endpoints.php";