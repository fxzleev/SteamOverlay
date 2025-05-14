// Тема
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Проверяем сохранённую тему или используем тёмную по умолчанию
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        body.classList.add('light');
        themeToggle.checked = true;
    } else {
        // Тёмная тема по умолчанию — ничего не добавляем
        themeToggle.checked = false;
    }
});

// Переключение темы
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('light');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light');
        localStorage.removeItem('theme');
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