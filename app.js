const optionsMenu = document.querySelector('.optionsDisplay');

function showMenu() {
    if(optionsMenu.classList.contains('hidden')) {
        optionsMenu.classList.remove('hidden');
    } else {
        optionsMenu.classList.add('hidden');
    }
}

const spinningCoinLeft = document.querySelector('#rotatingCoinLeft');
const spinningCoinRight = document.querySelector('#rotatingCoinRight');

function rotateCoin() {
    if(!spinningCoinLeft.classList.contains('rotateClass')) {
        spinningCoinLeft.classList.add('rotateClass');
    } else {
        spinningCoinLeft.classList.remove('rotateClass');
    }

    if(!spinningCoinRight.classList.contains('rotateClass')) {
        spinningCoinRight.classList.add('rotateClass');
    } else {
        spinningCoinRight.classList.remove('rotateClass');
    }
}

let rotatingCoinInterval = setInterval(rotateCoin, 500);