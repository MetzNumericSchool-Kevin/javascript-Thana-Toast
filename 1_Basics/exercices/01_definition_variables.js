// Définition de variables

const nom_boutique = "L'effet secondaire";
let stock_potion_soin = 25;
let prix_potion_soin = 42;
let boutique_ouverte = true;
const monnaie = "🪙";

console.log("La boutique d'Archibald s'apelle " + nom_boutique);
if (boutique_ouverte) {
    console.log("La boutique est actuellement ouverte");
} else {
    console.log("La boutique est actuellement fermée");
}
console.log("Il y a actuellement " + stock_potion_soin + " potions de soin à vendre au prix de " + prix_potion_soin + monnaie + " l'unité.")