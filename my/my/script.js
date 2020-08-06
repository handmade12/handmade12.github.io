const switchThemeButtonElement = document.querySelector('#switchThemeButton');
const darkThemeClass = 'dark';

function switchTheme() {
    const bodyElement = document.querySelector('body');
    const isDark = bodyElement.classList.contains(darkThemeClass);
    if (isDark) {
        bodyElement.classList.remove(darkThemeClass);
    } else {
        bodyElement.classList.add(darkThemeClass);
    }
}

switchThemeButtonElement.addEventListener('click', switchTheme);