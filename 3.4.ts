/* 




### Type Guard ব্যবহার করা Instance Of দিয়ে:

#### বর্ণনা:
Instance Of টাইপ গার্ড হল যা কোন অবজেক্ট নির্মাণের জন্য ব্যবহার করা হয়। 

#### Interview Questions:
1. What is the instanceof operator used for in TypeScript?
   - Answer: The instanceof operator is used to check if an object is an instance of a specific class.

*/

{
  // Type Guard ব্যবহার করা Instance Of দিয়ে

  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log(" i am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makrBark() {
      console.log(" i am barking");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makemew() {
      console.log(" i am mewaing");
    }
  }

  // if we want to handle in smart then we can use function
  const isDOg = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDOg(animal)) {
      animal.makrBark();
    } else if (isCat(animal)) {
      animal.makemew();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("dog vaiii", "dog");
  const cat = new Cat("cat vaii", "cat");

  getAnimal(cat);
}
