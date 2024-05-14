const button = document.getElementById("form");

button.addEventListener("click", (e) => {
  const senha = document.getElementById("password");
  const email = document.getElementById("email");

  e.preventDefault();

  const userData = JSON.stringify({
    password: senha.value,
    email: email.value,
  });

  fetch("http://10.92.198.38:8080/auth/signin", {
    method: "POST",
    body: userData,
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      // Verifica se a resposta da API contém um token
      if (data.token) {
        // Armazena o token no localStorage
        localStorage.setItem("token", data.token);
        console.log("Token armazenado com sucesso:", data.token);
        window.location.href = "/Postagem/index.html";
      } else {
        console.log("Token não encontrado na resposta da API");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
