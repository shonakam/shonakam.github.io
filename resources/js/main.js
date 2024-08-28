document.getElementById('theme-button').addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');
	document.querySelector('header').classList.toggle('dark-mode');

	const themeButton = document.getElementById('theme-button');
	if (document.body.classList.contains('dark-mode')) {
		themeButton.classList.replace('uil-sun', 'uil-moon');
	} else {
		themeButton.classList.replace('uil-moon', 'uil-sun');
	}
});
