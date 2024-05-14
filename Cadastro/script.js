const button = document.getElementById("submit");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");


button.addEventListener("click", (event) => {
  event.preventDefault();

  const userData = JSON.stringify({
    name: nome.value,
    email: email.value,
    password: senha.value,
  });
  console.log(userData);

  fetch("http://10.92.198.38:8080/auth/signup", {
    method: "POST",
    body: userData,
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
});
