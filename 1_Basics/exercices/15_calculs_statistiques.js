// Calculs et statistiques

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 7 },
  { nom: "Potion de force", prix: 60, stock: 3 }
];

let valeur_totale_inventaire = 0;
let prix_total_potions = 0;
let stock_total_potions = 0;

for (let i = 0; i < inventaire.length; i++) {
  valeur_totale_inventaire += inventaire[i].prix * inventaire[i].stock;
  prix_total_potions += inventaire[i].prix;
  stock_total_potions += inventaire[i].stock
};

let prix_moyen_potions = prix_total_potions / inventaire.length;

console.log("La valeur totale de l'inventaire est de " + valeur_totale_inventaire + "🪙.");
console.log("Le prix moyen d'une potion est de " + prix_moyen_potions + "🪙.");
console.log("Le stock total des potions est de " + stock_total_potions + ".");