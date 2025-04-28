// Переключение темы
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    const isLightMode = body.classList.contains('light');
    themeToggle.textContent = isLightMode ? 'Темная тема' : 'Светлая тема';
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