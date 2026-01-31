// Calcul du prix total d'une commande de potion 🪙

// Variables des exercices précédents (modifie selon tes valeurs)
let stock_potion_soin = 25;
let prix_potion_soin = 42;
const monnaie = "🪙";

quantite_voulue = prompt("Combien de potions de soin veux-tu acheter ? ");
const quantite_voulue_nombre = parseInt(quantite_voulue);

console.log("Prix de " + quantite_voulue_nombre + " potions de soins : " + quantite_voulue_nombre * prix_potion_soin + monnaie + " mon cher Aventurier. 💸")