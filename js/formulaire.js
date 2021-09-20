//fonction confirmer formulaire

function confirmer(formulaire) {
  var nom = formulaire.nom.value;
  var prenom = formulaire.prenom.value;
  var email = formulaire.email.value
  var adresse = formulaire.adresse.value;
  var datenaissance = formulaire.datenaissance.value;

  if (nom == "") {
    alert("Nom must be filled out!");
    return false;
  }
  else if (prenom == "") {
    alert("Prenom must be filled out!");
    return false;
  }
  else if (email == "") {
    alert("Email must be filled out!");
    return false;
  }
  else if (adresse == "") {
    alert("Adresse must be filled out!");
    return false;
  }

  else if (datenaissance == "") {
    alert("Date de naissance must be filled out!");
    return false;
  }

  else {
      confirm('Nom :' + nom + ' Prenom ' + prenom + 'Email : ' + email + ' Adresse ' + adresse +
    'Date de naissance' + datenaissance + 'Confirmer Client enregistré ');
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
