// Settings ★ Rafael

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Função para alternar o tema
function toggleTheme() {
    body.classList.toggle('dark-mode');

    // Salvar a preferência do usuário no armazenamento local
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Verificar a preferência do usuário ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

// Adicionar um ouvinte de evento para o botão
themeToggle.addEventListener('click', toggleTheme);