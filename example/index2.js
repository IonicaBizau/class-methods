class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  makeSound(sound) {
    console.log(`${this.name} the ${this.species} makes a ${sound} sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog");
    this.breed = breed;
  }

  // Getter method
  get fullInfo() {
    return `${this.name} the ${this.species} (${this.breed})`;
  }

  // Setter method
  set nickname(nickname) {
    this.name = nickname;
  }

  // Static method
  static isDog(animal) {
    return animal instanceof Dog;
  }
}

// Creating instances of the Dog class
const buddy = new Dog("Buddy", "Golden Retriever");
buddy.makeSound("bark");
console.log(buddy.fullInfo);

// Using getter and setter methods
buddy.nickname = "Bud";
console.log(buddy.fullInfo);

// Using a static method
const cat = new Animal("Whiskers", "Cat");
console.log(Dog.isDog(buddy)); // Output: true
console.log(Dog.isDog(cat));   // Output: false
