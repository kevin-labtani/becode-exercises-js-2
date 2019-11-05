// Crée un objet "character" qui contient les informations suivantes :
// name (string)

// age (numero)

// items_to_give (tableau)

// afficher chaque information sur une ligne séparés dans la console (for in)

// faire une fonction "giveItem" qui permet au PNJ de donner un objet aléatoirement

let character = {
  name: "Bob",
  age: 22,
  items_to_give: ["paper", "pencil", "coffee"],
  giveItem() {
    const max = this.items_to_give.length;
    const rand = Math.floor(Math.random() * max);
    console.log(`${this.name} give you ${this.items_to_give[rand]}`);
  }
};

for (const el in character) {
  console.log(character[el]);
}

character.giveItem();
