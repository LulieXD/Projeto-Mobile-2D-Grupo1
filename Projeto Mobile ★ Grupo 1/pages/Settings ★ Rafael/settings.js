// Settings ★ Rafael

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Função para alternar o tema
function toggleTheme() {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', toggleTheme);

//excluir conta

function deletar() {
  var txt;
  if (confirm("Sua conta será excluida caso\nconcorde com esta mensagem")) {
    window.location.href="/Projeto Mobile ★ Grupo 1/pages/Login ★ Maria/index.html"
  } else {
    txt = "";
  }

}