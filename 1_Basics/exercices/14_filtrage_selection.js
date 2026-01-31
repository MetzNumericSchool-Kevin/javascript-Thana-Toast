// Filtrage et sélection

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 0 },
  { nom: "Potion de force", prix: 60, stock: 3 },
  { nom: "Potion de vitesse", prix: 35, stock: 8 }
];

const potions_en_stock = [];

for (let i = 0; i < inventaire.length; i++) {
  if (inventaire[i].stock > 0) {
    potions_en_stock.push(inventaire[i]);
  }
};

const potions_abordables = [];

for (let i = 0; i < inventaire.length; i++) {
  if (inventaire[i].prix < 40) {
    potions_abordables.push(inventaire[i]);
  }
};

console.log("Il y a " + potions_en_stock.length + " potions en stock");
console.log(potions_en_stock);
console.log("Il y a " + potions_abordables.length + " potions abordables");
console.log(potions_abordables);