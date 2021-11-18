const optionsMenu = document.querySelector('.optionsMenuSection');
console.log(optionsMenu);

function showMenu() {
    if(optionsMenu.classList.contains('hidden')) {
        optionsMenu.classList.remove('hidden');
    } else {
        optionsMenu.classList.add('hidden');
    }
}