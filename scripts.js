// Получаем элементы
const themeToggle = document.getElementById('theme-toggle-checkbox');
const body = document.body;

// Загружаем сохранённую тему из localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light');
        themeToggle.checked = true;
    } else {
        body.classList.remove('light');
        themeToggle.checked = false;
    }
});

// Переключение темы
themeToggle.addEventListener('change', () => {
    body.classList.toggle('light', themeToggle.checked);

    // Сохраняем текущую тему
    if (themeToggle.checked) {
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