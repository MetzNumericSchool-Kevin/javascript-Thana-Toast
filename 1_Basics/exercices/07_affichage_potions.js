// Affichage des potions

// Variable de l'exercice précédent (modifie selon tes valeurs)
const potions = ["Potion de soin", "Potion de mana", "Potion d'endurance"];

console.log(potions[0]);

console.log(potions[potions.length - 1]);

for (let i =0; i < potions.length; i++) {
    console.log("Nous avons de la " + potions[i]);
}