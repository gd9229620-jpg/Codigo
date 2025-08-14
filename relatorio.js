document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão de alternância de tema e o corpo do documento
    const themeToggleButton = document.querySelector('.theme-toggle-button');
    const body = document.body;

    // Verifica a preferência de tema salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        // Aplica a classe de tema salva
        body.classList.add(savedTheme);
    }

    // Adiciona um listener de evento de clique ao botão
    themeToggleButton.addEventListener('click', () => {
        // Se o tema atual for "dark-mode"
        if (body.classList.contains('dark-mode')) {
            // Remove o tema escuro e salva a preferência de modo claro
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            // Aplica o tema escuro e salva a preferência
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});
