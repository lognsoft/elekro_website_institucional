<?php

function elekro_get_all_posts(WP_REST_Request $req):WP_Error|WP_REST_Response{
    try{
        $args = elekro_filter_posts($req->get_params());

        $data_query = new WP_Query($args);
        $data = [
            "total_pages" => $data_query->max_num_pages
        ];

        if($data_query->have_posts()){
            while($data_query->have_posts()){ $data_query->the_post();
                //armazenando id do post
                $id = get_the_ID();

                //pegando tags e categorias do meu post
                $data_tags = get_the_tags($id);
                $data_categories = get_the_category($id);

                //mapeando arrays
                $tags = $data_tags ? elekro_map_categories_and_tags($data_tags) : [];
                $categories = $data_categories ? elekro_map_categories_and_tags($data_categories) : [];

                $views = get_post_meta($id, "post_views_count", true);
                $views = $views === "" ? 0 : $views;

                $thumbnail = get_the_post_thumbnail_url(get_the_ID(), "elekro_card");

                //montando objeto para retorno em JSON
                $data["posts"][] = array(
                    "id" => $id,
                    "views" => (int)$views,
                    "thumbnail" => $thumbnail ? $thumbnail : '',
                    "title" => get_the_title(),
                    "slug" => get_post()->post_name,
                    "excerpt" => get_the_excerpt(),
                    "tags" => $tags,
                    "categories" => $categories,
                );

            }
            //Restaurando o contexto global após o loop
            wp_reset_postdata();
        }
        
        return new WP_REST_Response(
            $data,
            200
        );
    }catch(Exception $e){
        return new WP_Error(
            "server_error",
            $e->getMessage(),
            ['status' => 500]
        );
    }

}

function elekro_get_single_post(WP_REST_Request $req):WP_error|WP_REST_Response{
    $post_type = $req->get_param("type");
    $post_type = isset($post_type) ? sanitize_text_field($post_type) :"post";

    try {

        $slug = $req->get_param("slug");

        if(empty($slug)){
            return new WP_Error(
                "invalid_slug",
                "Nenhum slug informado",
                ["status" => 404]
            );
        }

        $data_query = new WP_Query(array(
            "post_type" => $post_type,
            "posts_per_page" => 1,
            "name" => $slug,
        ));

        if(!$data_query->have_posts()){
            return new WP_Error(
                "invalid_slug",
                "Nenhum resultado encontrado com o slug: {$slug}",
                ["status" => 404]
            );
        }

        while($data_query->have_posts()){ $data_query->the_post();
            //armazendando id de post
            $id = get_the_ID();

            //buscando tags e categories
            $data_tags = get_the_tags($id);
            $data_categories = get_the_category($id);

            //filtrando informações de tags e categorias
            $tags = $data_tags ? elekro_map_categories_and_tags( $data_tags ) : [];
            $categories = $data_categories ? elekro_map_categories_and_tags( $data_categories ) : [];


            //Adicionando Contador de views a postagem
            elekro_view_count_post($id);

            //numero de views do meu post
            $views = get_post_meta($id, "post_views_count", true);
            $views = $views === "" ? 0 : $views;

            $thumbnail = get_the_post_thumbnail_url(get_the_ID(), "elekro_card");

            $data = array(
                "id" => $id,
                "views" => (int)$views,
                "thumbnail" => $thumbnail ? $thumbnail : '',
                "title" => get_the_title(),
                "slug" => get_post()->post_name,
                "content" => get_the_content(),
                "excerpt" => get_the_excerpt(),
                "tags" => $tags,
                "categories" => $categories,
            );
        }
        wp_reset_postdata();


        return new WP_REST_Response(
            $data,
            200
        );
    } catch (Exception $e) {
        return new WP_Error(
            "server_error",
            $e->getMessage(),
            ["status"=> 500]
        );
    }
}

function elekro_get_categories(WP_REST_Request $req):WP_Error|WP_REST_Response{
    try {

        $categories_data = get_categories();
        $categories = $categories_data ? elekro_map_categories_and_tags($categories_data) : [];

        return new WP_REST_Response(
            $categories,
            200
        );
    } catch (Exception $e) {
        return new WP_Error(
            "server_error",
            $e->getMessage(),
            ["status" => 500]
        );
    }
}

function elekro_get_tags(WP_REST_Request $req):WP_Error|WP_REST_Response{
    try {

        $tags_data = get_tags();
        $tags = $tags_data ? elekro_map_categories_and_tags($tags_data) : [];

        return new WP_REST_Response($tags,200);
    } catch (Exception $e) {
        return new WP_Error(
            'server_error',
            $e->getMessage(),
            ["status" => 500]
        );
    }
}

function elekro_register_endpoints_posts():void{
    register_rest_route("api/v1", "/posts", array(
        "methods" => "GET",
        "callback" => "elekro_get_all_posts",
        'permission_callback' => '__return_true',
        "args" => array(
            "type" => array(
                "required" => false,
                "validate_callback" => function($param):bool {
                    return is_string($param);
                },
                "description" => "Para filtrar os os posts de um tipo expecífico."
            ),
            "category" => array(
                "required" => false,
                "validate_callback" => function($param):bool {
                    return is_string($param);
                },
                "description" => "Para filtrar posts por categoria."
            ),
            "tags" => array(
                "required" => false,
                "validate_callback" => function($param):bool {
                    return (is_string($param) || is_array($param));
                },
                "description" => "Para filtrar por tags."
            ),
            "search" => array(
                "required" => false,
                "validate_callback" => function($param):bool {
                    return is_string($param);
                },
                "description" => "Valor para buscar resultados de posts."
            ),
            "page" => array(
                "required" => false,
                "validate_callback" => function($param):bool {
                    return is_int((int)$param);
                },
                "description" => "Parametro para paginação."
            ),
            "limit" => array(
                "required" => false,
                "validate_callback" => function ($param):bool{
                    return is_int((int)$param);
                },
                "description" => "Parametro para paginação."
            )
        )
    ));
    register_rest_route("api/v1", "/post-single", array(
        "methods" => "GET",
        "callback" => "elekro_get_single_post",
        'permission_callback' => '__return_true',
        "args" => array(
            "slug" => array(
                "required" => true,
                "validate_callback" => function($param):bool {
                    return is_string($param);
                },
                "description" => "Slug do post para buscar dados expecificos do post"
            )
        )
    ));
    register_rest_route("api/v1", "/categories", array(
        "methods" => "GET",
        "callback" => "elekro_get_categories",
        'permission_callback' => '__return_true',
    ));
    
    register_rest_route("api/v1", "/tags", array(
        "methods" => "GET",
        "callback" => "elekro_get_tags",
        'permission_callback' => '__return_true',
    ));
}
add_action("rest_api_init", "elekro_register_endpoints_posts");