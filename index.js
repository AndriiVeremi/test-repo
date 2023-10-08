const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  // Change code below this line
  getPotions() {
    return this.potions;
  },
  
  addPotion(newPotion) {
    for (const obj of this.potions) {
      if (obj.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newObj);
    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (const obj of this.potions) {
      const potionIndex = this.potions.indexOf(obj);
      if (obj.name === potionName) {
        this.potions.splice(potionIndex, 1);
      } else {
        return `Potion ${potionName} is not in inventory!`;
      }
    }
  },

  updatePotionName(oldName, newName) {
    for (const obj of this.potions) {
      const potionIndex = this.potions.indexOf(obj);
      if (obj.name === oldName) {
        this.potions.splice(potionIndex, 1, newName);
      } else {
        return `Potion ${oldName} is not in inventory!`;
      }
    }
  },
};



console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));