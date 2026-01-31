// Affichage conditionnel avec switch

// Variables des exercices précédents (modifie selon tes valeurs)
const nom_boutique = "L'effet secondaire";
const nom_sorcier = "Archibald";
let stock_potion_soin = 25;
let prix_potion_soin = 42;
const monnaie = "🪙";

console.log("Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔\n1. Le nom de la boutique\n2. Le nom du Sorcier\n3. Le prix d'une potion de soin\n4. La quantité de potions de soin en stock")

const choix = prompt("Quel est ton choix ? ")
const choix_nombre = parseInt(choix)

switch (choix_nombre) {
    case 1:
        console.log("La boutique s'appelle " + nom_boutique);
        break;
    case 2:
        console.log("Je m'appelle " + nom_sorcier);
        break;
    case 3:
        console.log("Une potion de soin coûte " + prix_potion_soin + monnaie);
        break;
    case 4:
        console.log("Il y a actuellement " + stock_potion_soin + " potions de soin en stock");
        break;
    default:
        console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕");
        break;
}

