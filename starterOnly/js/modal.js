function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const formulaire = document.getElementById("form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event (évènement au clic et appel fonction closeModal)
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// récupération des valeurs des champs du formulaire
const form = document.getElementById("myForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox = document.getElementById("checkbox1"); //pour condition d'utilisation
const checkedCity = document.getElementById("checked"); //pour les villes a voir apres

/*
// je reçupère le formulaire et écoute le submit
form.addEventListener("submit", (event) => {
  // stop le comportement par défaut du navigateur
  event.preventDefault();
  // j'appel ma fonction de validation des données
  validateForm();
});
*/

// fonction pour récuperer la valeur cochée sur les éléments radio des villes
const locationChecked = () => {
  const location = document.querySelectorAll('input[name="location"]')
  let checked = false;
  for (let i = 0; i < locationCheck.length; i++) {
      if (location[i].checked) {
          checked = true;
          break
      }
  }
}

//création de la fonction de validation du prénom
function validerFirstName(firstName) {
  // création d'une REGEX pour la saisie des noms et prénoms
  let regexNames = /^[a-zA-ZÀ-ÿ\s\-]{2,}$/;
    if (!regexNames.test(firstName)) {
			throw new Error("Le prénom n'est pas valide.")
  }
}


// check firstname
function checkFirstName() {

  const firstNameValid = document.getElementById('first');
  firstNameValid.addEventListener('change', checkFirstName);
  const nameRegex = /^[a-zA-Z-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s-]{2,30}$/;
  if (nameRegex.test(firstNameValid.value) === true) {
    firstName.style.display = "none";
    firstNameValid.style.border = "2px solid #279e7a";
    //doc.firstName = firstNameValid.value;
    return true
  }
  else {
    firstName.style.display = "block ";
    firstName.innerHTML = "Veuillez rentrer deux caractères minimum et/ou un prénom valide";
    firstNameValid.style.border = "2px solid red";
    return false
  }
}
checkFirstName();



//création de la fonction de validation du nom
function validerLastName(lastName) {
  // création d'une REGEX pour la saisie des noms et prénoms
  let regexNames = /^[a-zA-ZÀ-ÿ\s\-]{2,}$/;
    if (!regexNames.test(lastName)) {
			throw new Error("Le nom n'est pas valide.")
  }
}

//création de la fonction de validation du mail
function validerMail(email) {
  // création d'une REGEX pour la saisie du mail
  let regexMails = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexMails.test(email)) {
			throw new Error("Le mail n'est pas valide.")
  }
}


/*
//Cette fonction affiche le message d'erreur passé en paramètre. 
//Si le span existe déjà, alors il est réutilisé pour ne pas multiplier
//les messages d'erreurs.
function afficherMessageErreur(message) {
  let spanErreurMessage = document.getElementsByClassName("text-control")

  if (!spanErreurMessage) {
      let popup = document.querySelector(".text-control")
      spanErreurMessage = document.createElement("span")
      spanErreurMessage.id = "erreurMessage"
      
      popup.append(spanErreurMessage)
  }
  spanErreurMessage.innerText = message
}

//fonction recupération des données du formulaire
function validateForm() {
  try {
    let prenom = firstName.value;
    validerFirstName(prenom);

    let nom = lastName.value;
    validerLastName(nom);

    let mail = email.value;
    validerMail(mail);
    afficherMessageErreur("")

  } catch(erreur) {
    afficherMessageErreur(erreur.message)
  }
}
*/