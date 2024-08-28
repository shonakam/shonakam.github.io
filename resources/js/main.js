
// theme-loader
document.addEventListener('DOMContentLoaded', function () {
	const storedTheme = localStorage.getItem('theme');
	const storedIcon = localStorage.getItem('icon');
	const themeButton = document.getElementById('theme-button');

	if (storedTheme == "dark") {
		document.body.classList.add('dark-mode');
		document.querySelector('header').classList.add('dark-mode');
		if (storedIcon) {
			themeButton.classList.add(storedIcon);
		}
	}
});

// change-theme-handler
document.getElementById('theme-button').addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');
	document.querySelector('header').classList.toggle('dark-mode');

	const themeButton = document.getElementById('theme-button');
	if (document.body.classList.contains('dark-mode')) {
		themeButton.classList.replace('uil-moon', 'uil-sun');
		localStorage.setItem('theme', 'dark');
		localStorage.setItem('icon', 'uil-sun');
	} else {
		themeButton.classList.replace('uil-sun', 'uil-moon');
		localStorage.setItem('theme', 'light');
		localStorage.setItem('icon', 'uil-moon');
	}
});
