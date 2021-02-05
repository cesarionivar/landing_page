const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    
    if(header.classList.contains('open')) { // Close Hambuger Menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(fadeElement => {
            fadeElement.classList.add('fade-out');
            fadeElement.classList.remove('fade-in');
        });
        
    } else { // Open Hamburger Menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(fadeElem => {
            fadeElem.classList.add('fade-in');
            fadeElem.classList.remove('fade-out');
        });

    }
});