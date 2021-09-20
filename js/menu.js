
//Date
var date = new Date()

document.getElementById("date").innerHTML = date;

//Annee
const annee = new Date().getFullYear();
document.getElementById("annee").innerHTML = annee;

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
