const themeToggle = document.getElementById('theme-toggle')
const themeToggleLabel = document.getElementById('theme-toggle-label') // Добавлено для работы с label
const body = document.body

// Загрузка сохранённой темы
document.addEventListener('DOMContentLoaded', () => {
	const savedTheme = localStorage.getItem('theme')
	if (savedTheme === 'light') {
		body.classList.add('light')
		themeToggle.checked = true // Устанавливаем состояние чекбокса в соответствии с сохраненной темой
	} else {
		body.classList.remove('light')
		themeToggle.checked = false
	}
})

// Переключение темы
themeToggle.addEventListener('change', () => {
	// Изменено с 'click' на 'change'
	if (themeToggle.checked) {
		body.classList.add('light')
		localStorage.setItem('theme', 'light')
	} else {
		body.classList.remove('light')
		localStorage.setItem('theme', 'dark')
	}
})

// Также обрабатываем клик по label для корректной работы
themeToggleLabel.addEventListener('click', () => {
	// Состояние будет изменено автоматически через связь input <-> label,
	// но мы можем вызвать событие change для надежности, если оно не сработало.
	// Обычно этого не требуется, так как click по label автоматически вызывает change на input.
})

// Поиск в Google
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')

searchButton.addEventListener('click', () => {
	const query = encodeURIComponent(searchInput.value.trim())
	if (query) {
		window.location.href = `https://www.google.com/search?q=${query}`
	}
})

searchInput.addEventListener('keypress', event => {
	if (event.key === 'Enter') {
		searchButton.click()
	}
})

// Конфиг: переключение между ссылками и меню конфигов
const configButton = document.getElementById('config-button')
const linksSection = document.getElementById('links-section')
const configSection = document.getElementById('config-section')
const gameContent = document.getElementById('game-content')

configButton.addEventListener('click', () => {
	const isConfigMode = configSection.style.display === 'block'

	// Переключаем видимость секций
	configSection.style.display = isConfigMode ? 'none' : 'block'
	linksSection.style.display = isConfigMode ? 'block' : 'none'

	// Очищаем контент при выходе из режима конфига
	if (isConfigMode) {
		gameContent.innerHTML = ''
	}
})

// Обработка выбора игры
document.querySelectorAll('.game-btn').forEach(button => {
	button.addEventListener('click', () => {
		const game = button.getAttribute('data-game')

		let content = ''

		switch (game) {
			case 'cs2':
				content = `
                    <div class="config-card">
                        <h3>Конфиг CS2</h3>
                        <p>Здесь вы можете скачать оптимизированный конфиг для CS2.</p>
                        <a href="downloads/cs2_config.cfg" class="download-btn" download>Скачать CS2 Конфиг</a>
                    </div>
                `
				break
			case 'csgo':
				content = `
                    <div class="config-card">
                        <h3>Конфиг CS:GO</h3>
                        <p>Здесь вы можете скачать оптимизированный конфиг для CS:GO.</p>
                        <a href="downloads/csgo_config.cfg" class="download-btn" download>Скачать CS:GO Конфиг</a>
                    </div>
                `
				break
		}

		gameContent.innerHTML = content
	})
})
