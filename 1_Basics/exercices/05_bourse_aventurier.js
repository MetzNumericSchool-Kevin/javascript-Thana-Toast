// Bourse de l'Aventurier 💰

// Variables des exercices précédents (modifie selon tes valeurs)
let stock_potion_soin = 25;
let prix_potion_soin = 42;
const monnaie = "🪙";

let bourse_aventurier = 300;

quantite_voulue = prompt("Combien de potions de soin veux-tu acheter ? ");
const quantite_voulue_nombre = parseInt(quantite_voulue);

let montant_achat = quantite_voulue_nombre * prix_potion_soin;
if (quantite_voulue_nombre <= stock_potion_soin && bourse_aventurier >= montant_achat) {
    stock_potion_soin -= quantite_voulue_nombre;
    bourse_aventurier -= montant_achat;
} else {
    console.log("Cet achat ne peut pas être effectué.")
}

console.log("Il reste " + stock_potion_soin + "potions de soin en stock")
console.log("Il reste " + bourse_aventurier + monnaie + " dans la bourse de l'aventurier")