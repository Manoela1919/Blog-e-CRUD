<?php
    include "conexao.php";

    $id = $_POST["id"];
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $telefone = $_POST["telefone"];
    $senha = $_POST["senha"];

    if (strlen($nome) === 0 || strlen($email) === 0 || strlen($telefone) === 0 ) {
        echo '<script>alert("Dados Inválidos")</script>';
        echo '<script>(window.location = "index.php?msg=error")</script>';
        return;
    }

    $editando_cadastro = "UPDATE clientes SET nome='$nome', email='$email', telefone='$telefone', senha='$senha'
    WHERE id = '$id'";

    $query_cadastro = mysqli_query($connect, $editando_cadastro);

    header("Location: index.php");
?>