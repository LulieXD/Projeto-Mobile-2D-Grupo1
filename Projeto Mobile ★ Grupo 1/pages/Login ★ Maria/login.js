// Login ★ Maria
function logar() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    
    if (usuario == "usuario" && senha == "123") {
        alert('Sucesso!');
        window.location.href = "home.html";
    } else {
        alert('Usuário ou senha incorretos');
    }
}