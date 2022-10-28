<?php
    include "conexao.php";

    $user = json_decode(file_get_contents('php://input'), true);

    $nome = $user["nome"];
    $email = $user["email"];
    $telefone = $user["telefone"];
    $senha = $user["senha"];

    $recebendo_cadastro = "INSERT INTO clientes VALUES (NULL, '$nome', '$email', '$telefone', '$senha')";
    $query_cadastro = mysqli_query($connect, $recebendo_cadastro);
?> 