const themeToggle = document.getElementById('theme-toggle')
const body = document.body

document.addEventListener('DOMContentLoaded', () => {
	const savedTheme = localStorage.getItem('theme')
	if (savedTheme === 'light') {
		body.classList.add('light')
		themeToggle.checked = true
	} else {
		body.classList.remove('light')
		themeToggle.checked = false
	}
})

themeToggle.addEventListener('change', () => {
	if (themeToggle.checked) {
		body.classList.add('light')
		localStorage.setItem('theme', 'light')
	} else {
		body.classList.remove('light')
		localStorage.setItem('theme', 'dark')
	}
})

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

const configButton = document.getElementById('config-button')
const linksSection = document.getElementById('links-section')
const configSection = document.getElementById('config-section')
const gameContent = document.getElementById('game-content')

if (configButton) {
	configButton.addEventListener('click', () => {
		const isConfigMode = configSection.style.display === 'block'

		configSection.style.display = isConfigMode ? 'none' : 'block'
		linksSection.style.display = isConfigMode ? 'block' : 'none'

		if (isConfigMode) {
			gameContent.innerHTML = ''
		}
	})
} else {
	console.error("Элемент с id='config-button' не найден в DOM.")
}

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
