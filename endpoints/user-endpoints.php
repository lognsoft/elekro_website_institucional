<?php

// function word_create_user(WP_REST_Request $req):WP_Error|WP_REST_Response{
//     $username = sanitize_text_field($req->get_param("username"));
//     $email = sanitize_email($req->get_param("email"));
//     $password = $req->get_param("password");
//     $role = "subscriber";


//     try {
//         if(empty($username) || empty($email) || empty($password)){
//             return new WP_Error("missing_data", "Nome de usuário, email e senha são origatórios.", ["status" => 400]);
//         }

//         if(!is_email($email)){
//             return new WP_Error("invalid_email","O E-mail fornecido não é válido.",["status" => 400]);
//         }

//         if(username_exists($username)){
//             return new WP_Error("username_exists","O nome de usuário já está em uso.",["status" => 400]);
//         }

//         if(email_exists($email)){
//             return new WP_Error("email_exists","O E-mail já está cadastrado em nossa base de dados.",["status" => 400]);
//         }

//         $user_id = wp_create_user($username, $password, $email);

//         if(is_wp_error($user_id)){
//             return new WP_Error("user_creation_failed","Erro ao criar usuário.",["status" => 500]);
//         }

//         $user = new WP_User($user_id);
//         $user->set_role($role);

//         return new WP_REST_Response(array(
//             'id' => $user_id,
//             'username' => $username,
//             'email' => $email,
//             'role' => $role,
//         ), 201);
//     } catch (Exception $e) {
//         return new WP_Error(
//             "server_error",
//             $e->getMessage(),
//             ["status"=> 500]
//         );
//     }
// }

// function word_login_user(WP_REST_Request $req):WP_Error|WP_REST_Response{
//     $login = trim($req->get_param("login"));
//     $password = $req->get_param("password");

//     try {
//         if(empty($login) || empty($password)){
//             return new WP_Error(
//                 "missing_data",
//                 "Nome ou email de usuário e senha são obrigatórios",
//                 ["status"=> 400]
//             );
//         }

//         // Detectar se o login fornecido é um e-mail
//         if (is_email($login)) {
//             $login = sanitize_email($login);
//             // Obter o usuário pelo e-mail
//             $user = get_user_by('email', $login);
//             if (!$user) {
//                 return new WP_Error(
//                     'invalid_email',
//                     'Nenhum usuário encontrado com este e-mail.',
//                     array('status' => 401)
//                 );
//             }
//             $login = $user->user_login; // Substituir pelo username
//         } else {
//             $login = sanitize_text_field($login);
//         }

//         $credentials = array(
//             'user_login'    => $login,
//             'user_password' => $password,
//             'remember'      => true,
//         );

//         $user = wp_signon($credentials, false);

//         if (is_wp_error($user)) {
//             error_log("Erro de wp_signon: " . $user->get_error_message());
//             return new WP_Error(
//                 'invalid_credentials',
//                 'E-mail/username ou senha inválidos.',
//                 array('status' => 401)
//             );
//         }
    

//         $response = array(
//             'user_id' => $user->ID,
//             'username' => $user->user_login,
//             'email' => $user->user_email,
//             "log" => true,
//         );

//         return new WP_REST_Response($response,200);
//     } catch (Exception $e) {
//         return new WP_Error(
//             "server_error",
//             $e->getMessage(),
//             ["status"=> 500]
//         );
//     }
// }

// function word_user_endpoints(){
//     register_rest_route("api/v1", "/user/create", array(
//         "methods" => "POST",
//         "callback" => "word_create_user",
//         "args" => array(
//             "username" => array(
//                 "required" => true,
//                 "validate_callback" => function($param):bool {
//                     return is_string($param);
//                 },
//                 "description" => "Nome de usúario é obrigatório"
//             ),
//             "email" => array(
//                 "required" => true,
//                 "validate_callback" => function($param):bool {
//                     return is_string($param);
//                 },
//                 "description" => "E-mail de usúario é obrigatório"
//             ),
//             "password" => array(
//                 "required" => true,
//                 "validate_callback" => function($param):bool {
//                     return is_string($param);
//                 },
//                 "description" => "Senha de usúario é obrigatório"
//             )
//         )
//     ));
//     register_rest_route("api/v1", "/user/login", array(
//         "methods" => "POST",
//         "callback" => "word_login_user",
//         "args" => array(
//             "login" => array(
//                 "required" => true,
//                 "validate_callback" => function($param):bool {
//                     return is_string($param);
//                 }
//             ),
//             "password" => array(
//                 "required" => true,
//                 "validate_callback" => function($param):bool {
//                     return is_string($param);
//                 }
//             )
//         )
//     ));
//     register_rest_route("api/v1", "/current/user", array(
//         "methods" => "GET",
//         "callback" => "teste_log"
//     ));
// }
// add_action("rest_api_init","word_user_endpoints");