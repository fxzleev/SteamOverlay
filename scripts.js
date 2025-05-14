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