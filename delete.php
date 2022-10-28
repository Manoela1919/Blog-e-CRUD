<?php
include "conexao.php";
$id = $_POST['id'];
$deletar_cadastro = "DELETE FROM clientes WHERE id = '$id'";
$query_deletar = mysqli_query($connect, $deletar_cadastro);
header("location: index.php");

?>