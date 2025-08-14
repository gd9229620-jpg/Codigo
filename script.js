const ctx = document.getElementById('graficoGanhos').getContext('2d');
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Configuração do gráfico
const chartConfig = {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Ganhos',
            data: [500, 800, 1200, 900, 1500, 2000],
            borderColor: '#4C7DFF',
            backgroundColor: 'rgba(76, 125, 255, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    font: {
                        family: 'Poppins'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(52, 58, 64, 0.8)',
                titleFont: {
                    family: 'Poppins'
                },
                bodyFont: {
                    family: 'Poppins'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        family: 'Poppins'
                    }
                }
            },
            y: {
                ticks: {
                    font: {
                        family: 'Poppins'
                    }
                }
            }
        }
    }
};

// Instancia o gráfico
const myChart = new Chart(ctx, chartConfig);


// Função para alternar o tema
function toggleTheme() {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

    updateThemeIcon();
    updateChartColors();
}

// Função para atualizar o ícone do botão
function updateThemeIcon() {
    const icon = themeToggleButton.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Função para atualizar as cores do gráfico
function updateChartColors() {
    const newPrimaryColor = getComputedStyle(document.body).getPropertyValue('--cor-primaria').trim();
    myChart.data.datasets[0].borderColor = newPrimaryColor;
    myChart.data.datasets[0].backgroundColor = newPrimaryColor.replace('rgb', 'rgba').replace(')', ', 0.1)');
    myChart.update();
}

// Adiciona o evento de clique ao botão
themeToggleButton.addEventListener('click', toggleTheme);

// Checa a preferência do usuário ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
    updateThemeIcon();
    updateChartColors();
});