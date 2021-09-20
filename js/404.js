//404 Error

setTimeout(function(){ window.location="index.html"; },3000);


//Menu Hamburger

const menuSlider = () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu__active')
    hamburger.classList.toggle('toggle');
  });

}

menuSlider();
