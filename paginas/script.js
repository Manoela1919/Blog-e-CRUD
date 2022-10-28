function mostrarOcultar() {
  const senha = document.getElementById("senha");
  const icon = document.getElementById("icon");

  if (senha.type === "password") {
    senha.type = "text";
    icon.setAttribute("class", "fa-solid fa-eye-slash");
  } else {
    senha.type = "password";
    icon.setAttribute("class", "fa-solid fa-eye");
  }
}

function myFunction() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var telefone = document.getElementById("telefone").value;
  var confirmar = document.getElementById("confirmar").value;

  if (
    nome == "" ||
    email == "" ||
    senha == "" ||
    telefone == "" ||
    confirmar !== senha
  ) {
    // alert("preencha os campos corretamente")
    document.getElementById("erro").innerHTML = "Erro!";
    document.getElementById("erro").style.display = "block";
    document.getElementById("sucesso").style.display = "none";
  } else {
    if (senha.length < 8) {
      // alert("sua senha precisa de no mínimo 8 digitos")
      document.getElementById("erro").innerHTML = "Senha muito curta";
      document.getElementById("erro").style.display = "block";
      document.getElementById("sucesso").style.display = "none";
      return;
    } else {
      document.getElementById("sucesso").style.display = "block";
      document.getElementById("erro").style.display = "none";

      var user = {
        nome: nome,
        email: email,
        telefone: telefone,
        senha: senha,
      };

      fetch ("http://localhost/CRUD_MANU/cadastrar2.php", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {"Content-type": "application/json; charset=UTF-8"},
        mode: 'no-cors'
      })
      .then(() => console.log('cadastrado'))
      .catch(() => console.log('falha ao cadastrar'))
    }
  }
}
