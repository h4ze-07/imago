const menuLink = document.getElementById('menu-link');
const popupArea = document.getElementById('popup-menu');

menuLink.addEventListener('click', () => {
    popupArea.classList.toggle('active');
})

popupArea.addEventListener('click', (e) => {
    if (e.target == popupArea) {
        popupArea.classList.toggle('active')
    }
})