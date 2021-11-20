const optionsMenu = document.querySelector('.optionsDisplay');

function showMenu() {
    if(optionsMenu.classList.contains('hidden')) {
        optionsMenu.classList.remove('hidden');
    } else {
        optionsMenu.classList.add('hidden');
    }
}