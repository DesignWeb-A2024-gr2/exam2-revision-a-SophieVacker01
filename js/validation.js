let verificationspecial_regex = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~\\";
let erreur = getElementById('erreur');
let DA = getElementById('numero_da').value;
// Objet regex dont le pattern est de permettre seulement des chiffres
let REGEX_SEULEMENT_CHIFFRE1 = /^\d+$/;

//function Validation()
//{
    //let presencespecial = false;
    //let presencelettre = false;

    //for (let i = 0; i < DA.length; i++) {
        //if (DA[i] == verificationspecial_regex){
            //presencespecial = true;
        //}

        //if (DA[i] != REGEX_SEULEMENT_CHIFFRE) {
            //presencelettre = true;
        //}

        //if (presencelettre == true && presencespecial == true){
            //erreur.style.visibility = visible;
        //}
    //}
//}

const monFormulaire = document.getElementById("formulaire_examen");
monFormulaire.addEventListener('submit', Verif);

function Verif()
{
    for (let i = 0; i < DA.length; i++)
    {
        if (DA[i] != REGEX_SEULEMENT_CHIFFRE1)
        {
            erreur.style.display = block;
            let formValide = false;
            e.preventDefault;
        }

        else if (DA[i] == verificationspecial_regex)
        {
            erreur.style.display = block;
            e.preventDefault;
        }

        else 
        {
            formValide = true;
            monFormulaire.submit();
        }  
    }   
    return formValide;
}

// Les éléments html du formulaire utilisés dans le script
const inputNoDA = document.getElementById('numero_da');             // Le input du numéro de da
const declaration = document.getElementById('declaration');         // Le checkbox de la déclaration
const sliderNote = document.getElementById('note_estime');          // Le slider de sélection de la note estimée
const titreNote = document.getElementById('titre_note_estime');     // Le titre de la note estimé
const daIconeErreur = document.getElementById('da_icone_erreur');   // L'icone d'erreur associée au input du numéro de da
const daIconeSucces = document.getElementById('da_icone_succes');   // L'icone de succès associée au input du numéro de da

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