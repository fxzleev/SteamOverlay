const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Загрузка сохранённой темы
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light');
    } else {
        body.classList.remove('light');
    }
});

// Переключение темы
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');

    // Сохраняем тему
    if (body.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});

// Поиск в Google
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
    const query = encodeURIComponent(searchInput.value.trim());
    if (query) {
        window.location.href = `https://www.google.com/search?q=${query}`;
    }
});

searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});

// Тренировка: переключение между ссылками и меню
const trainingButton = document.getElementById('training-button');
const linksSection = document.getElementById('links-section');
const trainingSection = document.getElementById('training-section');
const gameContent = document.getElementById('game-content');

trainingButton.addEventListener('click', () => {
    const isTrainingMode = trainingSection.style.display === 'block';

    // Переключаем видимость секций
    trainingSection.style.display = isTrainingMode ? 'none' : 'block';
    linksSection.style.display = isTrainingMode ? 'block' : 'none';

    // Очищаем контент при выходе из режима тренировки
    if (isTrainingMode) {
        gameContent.innerHTML = '';
    }
});

// Обработка выбора игры
document.querySelectorAll('.game-btn').forEach(button => {
    button.addEventListener('click', () => {
        const game = button.getAttribute('data-game');

        let content = '';

        switch (game) {
            case 'cs2':
                content = `
                    <h3>Тренировка CS2</h3>
                    <ul>
                        <li><a href="https://www.youtube.com/watch?v=iR9O2El1Mvg" target="_blank">ТРЕНИРОВКА АИМА ОТ ТОП 100 FACEIT</a></li>
                        <li><a href="https://www.youtube.com/watch?v=gKGYsPqZwVM" target="_blank">Основы МИКРЫ</a></li>
                        <li><p>KZ CYBERSHOKE MAP: kz_variety_fix</p></li>
                        <li><p>BHOP CYBERSHOKE MAP: bhop_arcane final</p></li>
                        <li><p>DM: Только HSDM 700 киллов и PistolDM 1к киллов</p></li>
                        <li><p>Aim_Treeni: Size - 3, Level - 2 набивать 2к - 3к таргетов (Использовать карту в случае если не играете DM)</p></li>
                        <li><p>Но самое главное в тренировке делать упор на вашу слабую зону</p></li>
                    </ul>
                `;
                break;
            case 'valorant':
                content = `
                    <h3>Тренировка VALORANT</h3>
                    <p>Ссылки:</p>
                    <ul>
                        <li><a href="https://playvalorant.com/ " target="_blank">Официальный сайт</a></li>
                        <li><a href="https://www.vla.gg/ " target="_blank">VLR.GG – новости и матчи</a></li>
                    </ul>
                `;
                break;
            case 'fortnite':
                content = `
                    <h3>Тренировка Fortnite</h3>
                    <p>Ссылки:</p>
                    <ul>
                        <li><a href="https://www.epicgames.com/fortnite/ru/home/ " target="_blank">Официальный сайт</a></li>
                        <li><a href="https://fortnitetracker.com/ " target="_blank">Статистика игроков</a></li>
                    </ul>
                `;
                break;
        }

        gameContent.innerHTML = content;
    });
});