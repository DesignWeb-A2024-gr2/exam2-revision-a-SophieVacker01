// Les éléments html du formulaire utilisés dans le script
const inputNoDA = document.getElementById('numero_da');             // Le input du numéro de da
const sliderNote = document.getElementById('note_estime');          // Le slider de sélection de la note estimée
const titreNote = document.getElementById('titre_note_estime');     // Le titre de la note estimé
const daIconeErreur = document.getElementById('da_icone_erreur');   // L'icone d'erreur associée au input du numéro de da
const daIconeSucces = document.getElementById('da_icone_succes');   // L'icone de succès associée au input du numéro de da
const icone_note = document.getElementById('icone_note');           // L'icône pour la note
const monFormulaire = document.getElementById('formulaire_examen'); // Le formulaire
const declaration = document.getElementById('declaration');         // Le checkbox de la déclaration

// Initialisation de l'affichage de la bonne icone associé au numéro de da
daIconeErreur.classList.remove('hidden');
daIconeSucces.classList.add('hidden');

/**
 * Modifie les classes d'un élément icone selon la valeur d'une note
 * @param {integer} note La note utilisée pour savoir qu'elle classe prendre
 */
function ModifierIconeNote(note) {
    // l'élément icone qui sera modifié
    const iconeNote = document.getElementById('icone_note');
    // On initialise les classes de l'élément à "vide"
    iconeNote.setAttribute("class", "");

    // Ajout des bonnes classes selon la valeur de la note
    // À COMPLÉTER
}

/**
 * Affiche un message dans la première balise small du même niveau qu'un élément html
 * @param {HTMLElement} element L'élément html de départ
 * @param {string} message Le message à afficher
 */
function AfficherMessage(element, message = '') {
    const zoneMessage = element.parentElement.querySelector('small');
    zoneMessage.innerHTML = message;
}

/**
 * Génère un nombre entier aléatoirement
 * @param {int} min La valeur minimum du nombre généré
 * @param {int} max La valeur maximum du nombre généré
 * @returns Un nombre entier
 */
function ObtenirNombreAleatoire(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

// Validation du DA
inputNoDA.addEventListener("input", ValidationDA)
function ValidationDA() {

    // Déclarer les valeurs par true and false
    let valideDA = false;
    let validechiffre = false;
    let valideNolettre = false;
    let Validationlongueur = false;
    const REGEX_SEULEMENT_CHIFFRE = /^\d+$/;
    const regex = /^[12]/;

    //validation premier chiffre
    if (inputNoDA.value.match(regex)){
        validechiffre = true;
    }
    
    //validation longueur
    let longueur = inputNoDA.value.length;
    if (longueur === 7){
        Validationlongueur = true;
    }

    //Voir si le input conrrespond au REGEX
    if (inputNoDA.value.match(REGEX_SEULEMENT_CHIFFRE)) {
        valideNolettre = true;
    }

    //Validation finale
    if (validechiffre && Validationlongueur && valideNolettre) {
        valideDA = true;
    }

    //Cacher et montrer l'icone
    if (!valideDA) {
        daIconeErreur.classList.remove('hidden');
        daIconeSucces.classList.add('hidden');
    }
    else {
        daIconeSucces.classList.remove('hidden');
        daIconeErreur.classList.add('hidden');
    }
    return valideDA;
}

//Modification de l'icone bonhomme sourir
sliderNote.addEventListener("input", NoteEstime)

function NoteEstime() {
    titreNote.innerText = "Ma note estimée = " + sliderNote.value + " %";

    if (sliderNote.value >= 0 && sliderNote.value <= 19) {
            icone_note.className = "far fa-sad-cry";
        } else if (sliderNote.value >= 20 && sliderNote.value <= 39) {
            icone_note.className = "far fa-sad-tear";
        } else if (sliderNote.value >= 40 && sliderNote.value <= 59) {
            icone_note.className = "far fa-frown";
        } else if (sliderNote.value >= 60 && sliderNote.value <= 79) {
            icone_note.className = "far fa-smile";
        } else if (sliderNote.value >= 80 && sliderNote.value <= 100) {
            icone_note.className = "far fa-grin-squint-tears";
        }
}

// Validation du formulaire
declaration.addEventListener("change", ValidationForm);
monFormulaire.addEventListener("submit", ValidationForm); 

function ValidationForm(e) {
    let valideform = false; 
    let valideDAform = false; 
    let validecase = false; 
    
    if (declaration.checked) {
        validecase = true; 
    } 
    
    if (ValidationDA() === true) {
        valideDAform = true; 
    } 

    if (valideDAform && validecase) {
        valideform = true;
    }
    
    if (!valideform){
        e.preventDefault(); 
    } 
    return valideform; 
}