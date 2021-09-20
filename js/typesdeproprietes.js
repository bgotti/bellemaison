// fonction afficher image


function affiche(typesdeproprietes)
{
	var popup = window.open(typesdeproprietes, ' typesdeproprietes ', "popup", "fullscreen");
  if (popup.outerWidth < screen.availWidth || popup.outerHeight < screen.availHeight)
  {
  	popup.moveTo(0,0);
  	popup.resizeTo(screen.availWidth, screen.availHeight);
  }
}



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
