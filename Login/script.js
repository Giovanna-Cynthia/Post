const form = document.getElementById("form")

form.addEventListener("submit", (e) =>{
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");

    e.preventDefault();    
    
    const userData = JSON.stringify({
        nome: nome.value,
        email: email.value
    })
    
    fetch("http://10.92.198.38:8080/auth/signin", {
        method: "Post",
        body: userData,
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then((result) => result.json())
        .then((data) => console.log(data))
        .then((err) => console.log(err));
    })