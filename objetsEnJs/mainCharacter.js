// crée un objet "mainCharacter" qui possède les propriétés suivantes :
// name (string)
// level (int)
// life (int)
// weapon (object)
// attack (function)
// l'objet "weapon" possède les propriétés suivantes :
// name (string)
// damage (int)
// Appeler la fonction "attack" du personnage
// la fonction doit retourner : (le nom du personnage) attaque avec l'arme (nom de l'arme) les dégâts sont (niveau du personnage multiplié par le damage de l'arme)

const mainCharacter = {
  name: "Bob",
  level: 22,
  life: 7,
  weapon: {
    name: "Axe",
    damage: 12
  },
  attack() {
    const degats = this.level * this.weapon.damage;
    console.log(
      `${this.name} attaque avec l'arme ${this.weapon.name}, les dégâts sont ${degats}`
    );
  }
};

mainCharacter.attack();
