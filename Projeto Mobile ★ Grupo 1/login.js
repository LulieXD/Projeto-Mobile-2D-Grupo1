// Login ★ Maria
function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    
    if (login == "pipi" && senha == "123") {
        alert('Sucesso!');
        window.location.href = "home.html";
    } else {
        alert('Usuário ou senha incorretos');
    }
}