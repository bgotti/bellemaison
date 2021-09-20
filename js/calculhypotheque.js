//fonction calculer

function calculer(formulaire) {
  var montant = formulaire.montant.value;
  var taux = formulaire.taux.value;
  var terme = formulaire.terme.value;
  var paye_mensuel = trouve_paiement(montant, taux / 12, terme * 12);


  if (montant == "") {
    alert("Montant must be filled out!");
    return false;
  }
  else if (taux == "") {
    alert("Taux must be filled out!");
    return false;
  }
  else if (terme == "") {
    alert("Terme must be filled out!");
    return false;
  }
  else if (paye_mensuel == "") {
    alert("Paye mensuel must be filled out!");
    return false;
  }

  else {

    alert("Montant de l'emprunt :\t$" + montant + "\n" +
      "Taux d'intérêt annuel :\t" + taux * 100 + "%\n" +
      "Amortissement :\t\t" + terme + " années\n\n" +
      "Paiement mensuel :\t$" + paye_mensuel.toFixed(2));

    }

}

//fonction calculer paiement

function trouve_paiement(PR, IN, PE) {
  var PAY = (PR * IN) / (1 - Math.pow(1 + IN, -PE))
  return PAY
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
