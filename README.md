﻿




### Polymorphism:

#### বর্ণনা:
Polymorphism হল একটি কনসেপ্ট যা বলে যে একটি মেথড বা প্রোপার্টি পুনরাবৃত্তি নেয়, কিন্তু বিভিন্ন ক্লাসে একে অন্য ধরনে পরিবর্তে সৃষ্টি হয়। 

#### Interview Questions:
1. What is polymorphism in TypeScript?
   - Answer: Polymorphism is a concept where a method or property can take different forms but behaves differently in different classes.

2. How do you achieve polymorphism in TypeScript?
   - Answer: Polymorphism in TypeScript can be achieved through method overriding and method overloading.




<details>
<summary> What is   Class and Object  </summary>
<br >

### ক্লাস এবং অবজেক্ট (Class and Object):

#### বর্ণনা:
ক্লাস হল একটি টেমপ্লেট যা অবজেক্ট তৈরি করার জন্য ব্যবহৃত হয়। অবজেক্ট হল ক্লাসের ইনস্ত্যান্স।

#### Interview Questions:
1. What is a class?
   - Answer: A class is a blueprint/template used to create objects.

2. What is an object?
   - Answer: An object is an instance of a class. 

```js 

{
  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    //  parameter properties

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }

    makesound() {
      console.log(`the ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("german shaperd", "dog", "ghew ghew");
  dog.makesound();
}

```

</details> 
<details>
<summary> What is   Inheritance  </summary>
<br >


#### বর্ণনা:
Inheritance হল একটি ক্লাসের গুন এবং প্রোপার্টিগুলি অন্য ক্লাসে ব্যবহার করা। 

#### Interview Questions:
1. What is inheritance in object-oriented programming?
   - Answer: Inheritance is a mechanism where a class can inherit properties and methods from another class.

2. How do you implement inheritance in TypeScript?
   - Answer: In TypeScript, you can use the `extends` keyword to inherit from another class.



```js 
{
  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOfHour: number) {
      console.log(`${this.name} will sleep for ${numOfHour}`);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student1 = new Student("mr. student", 20, "pabna");

  class Teacher extends Parent {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    getSleep(numOfHour: number) {
      console.log(`${this.name} will sleep for ${numOfHour}`);
    }
    takeClass(numOfClass: number) {
      console.log(`${this.name} will sleep for ${numOfClass}`);
    }
  }
  const teacher1 = new Teacher("mr. teacher", 50, "pabna", "professor");
}

```
</details> 
<details>
<summary> Type Guard ব্যবহার করা Typeof এবং In দিয়ে:    </summary>
<br >
#### বর্ণনা:
Type Guard হল একটি মেথড যা আমাদের কোডের টাইপ এরর কমাতে সাহায্য করে। Typeof এবং In কীওয়ার্ড দিয়ে আমরা টাইপ গার্ড করতে পারি।

#### Interview Questions:
1. What is a type guard in TypeScript?
   - Answer: A type guard is a method that helps us to reduce type errors in our code. We can use the `typeof` and `in` keywords to perform type guards.

2. How do you use typeof and in for type guards?
   - Answer: We can use typeof to check the type of a variable, and in to check if a property exists in an object.

### Type Guard ব্যবহার করা Instance Of দিয়ে:

#### বর্ণনা:
Instance Of টাইপ গার্ড হল যা কোন অবজেক্ট নির্মাণের জন্য ব্যবহার করা হয়। 

#### Interview Questions:
1. What is the instanceof operator used for in TypeScript?
   - Answer: The instanceof operator is used to check if an object is an instance of a specific class.

2. How do you use instanceof for type guarding?
   - Answer: We can use the instanceof operator to check if an object is an instance of a particular class.

```js 

{
  //  type guard
  //  typeof --> type guard

  type AlphaNeumaric = number | string;

  const add = (param1: AlphaNeumaric, param2: AlphaNeumaric): AlphaNeumaric => {
    if (typeof param1 === "number" && param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };
  const result1 = add("1", " 3");
  console.log(result1);

  //  in guard
  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`my name is ${user.name} and role is ${user.role}`);
    } else {
      console.log(` my name is ${user.name}`);
    }
  };
  const normalUser: NormalUser = {
    name: "mr Normal vai",
  };
  const addminvai: AdminUser = {
    name: " mr admin vai",
    role: "admin",
  };
  getUser(normalUser);
}


``` 


</details> 
<details>
<summary> Type Guard ব্যবহার করা Instance Of দিয়ে    </summary>
<br >
### Type Guard ব্যবহার করা Instance Of দিয়ে:

#### বর্ণনা:
Instance Of টাইপ গার্ড হল যা কোন অবজেক্ট নির্মাণের জন্য ব্যবহার করা হয়। 

#### Interview Questions:
1. What is the instanceof operator used for in TypeScript?
   - Answer: The instanceof operator is used to check if an object is an instance of a specific class.



```js 

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

```
</details> 
<details>
<summary> What is  Access Modifiers   </summary>
<br >


### Access Modifiers:

#### বর্ণনা:
Access Modifiers হল ক্লাসের প্রোপার্টি বা মেথডের এক্সেস পরিধি নির্ধারণ করা। TypeScript-এ তিনটি এক্সেস মোডিফায়ার আছে: public, private, এবং protected।

#### Interview Questions:
1. What are access modifiers in TypeScript?
   - Answer: Access modifiers define the access scope of class properties and methods. In TypeScript, there are three access modifiers: public, private, and protected.

2. What is the difference between public, private, and protected access modifiers?
   - Answer: 
     - `public`: Members are accessible from outside the class.
     - `private`: Members are accessible only within the class.
     - `protected`: Members are accessible within the class and its subclasses.


```js 

{
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    public addDeposit(amount: number) {
      this.balance = this.balance + amount;
    }
    public getBalane() {
      return this.balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this.balance;
    }
  }

  const goribAccount = new BankAccount(111, "mr gorib", 10);
  //   goribAccount.balance = 0;
  goribAccount.addDeposit(300);
  const myBalance = goribAccount.getBalane();
  console.log(myBalance);
}
```
</details> 

<details>
<summary> What is   Getter এবং Setter  </summary>
<br >

Getter এবং Setter হল ক্লাসের প্রোপার্টির মান রিট্রাইভ এবং সেট করার জন্য ব্যবহৃত মেথড।

#### Interview Questions:
1. What are getters and setters in TypeScript?
   - Answer: Getters and setters are methods used to retrieve and set the values of class properties.

2. How do you define a getter and setter in TypeScript?
   - Answer: 
     ```typescript
     class MyClass {
         private _myProperty: number = 0;
         get myProperty(): number {
             return this._myProperty;
         }
         set myProperty(value: number) {
             this._myProperty = value;
         }
     }
     ```

```js 

{
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }

    set deposit(amount: number) {
      this.balance = this.balance + amount;
    }

    // public addDeposit(amount: number) {
    //   this.balance = this.balance + amount;
    // }

    get Balance() {
      return this.balance;
    }

    // public getBalane() {
    //   return this.balance;
    // }
  }

  class StudentAccount extends BankAccount {
    test() {
      this.balance;
    }
  }

  const goribAccount = new BankAccount(111, "mr gorib", 60);
  //   goribAccount.balance = 0;
  //   goribAccount.addDeposit(300);
  goribAccount.deposit = 40;
  //   const myBalance = goribAccount.getBalane();

  const myBalance = goribAccount.Balance; /// property er moto kore
  console.log(myBalance);
}

```
</details> 

<details>
<summary> Statics এবং অবজেক্ট ওরিএন্টেড প্রোগ্রামিং    </summary>
<br >
### Statics এবং অবজেক্ট ওরিএন্টেড প্রোগ্রামিং:

#### বর্ণনা:
স্ট্যাটিক মেথড এবং প্রোপার্টির সাহায্যে আমরা ক্লাসের নিজস্ব প্রোপার্টি এবং মেথড এক্সেস করতে পারি, অবজেক্ট তৈরি না করে।

#### Interview Questions:
1. What are static members in TypeScript?
   - Answer: Static members are properties or methods of

 a class that can be accessed without creating an instance of the class.

2. How do you define static members in TypeScript?
   - Answer: We use the `static` keyword to define static properties and methods.
     ```typescript
     class MyClass {
         static myStaticProperty: number = 10;
         static myStaticMethod() {
             console.log("Hello from static method");
         }
     }
     ``` 



```js 
{
  //  static

  class Counter {
    static count: number = 0;
    static increament() {
      return (Counter.count = Counter.count + 1);
    }
    static decreament() {
      return (Counter.count = Counter.count - 1);
    }
  }
  //   const instance = new Counter();
  console.log(Counter.increament()); // 1- > defferent memory
  //   const instance2 = new Counter();
  console.log(Counter.increament()); // - > defferent memory

  //   const instance3 = new Counter();
  console.log(Counter.increament());
}
```
</details> 


<details>
<summary> What is   Abstraction (আবস্ট্র্যাকশন)  </summary>
<br >

### Abstraction (আবস্ট্র্যাকশন):

#### Explanation:
Abstraction is a concept where the important features of an object or process are directed, which are not connected with other subjects. It's an engineering condition where many circumstances or directions, while central to the same subject, are not extensively or explicitly addressed.

#### Interview Questions:
1. What is abstraction?
   - Answer: Abstraction is a concept where the important features of an object or process are directed, which are not connected with other subjects.

2. Can you give an example of abstraction?
   - Answer: For example, consider a mobile application. Users of this application can only use the app and are not directed to any part of the code. Only what they need is presented to them. This mobile application is an example where abstraction is not extensively addressed.



```js 
{
  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car1 implements Vehicle {
    startEngine(): void {
      console.log(`i am starting the car engine`);
    }

    stopEngine(): void {
      console.log(" i am stopping engine");
    }
    move(): void {
      console.log(` i am moving`);
    }
    test() {
      console.log(`i am testing`);
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  // Abstract class

  abstract class Car2 {
    startEngine(): void {
      console.log(`i am starting the car engine`);
    }

    stopEngine(): void {
      console.log(" i am stopping engine");
    }
    move(): void {
      console.log(` i am moving`);
    }
    test() {
      console.log(`i am testing`);
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {}
  }
  // const hondaCar = new Car2();
  //
}

```
</details>   

<details> 
<summary>Encapsulation (এনক্যাপসুলেশন) in OOP:</summary> 
br 

### 

#### Explanation:
Encapsulation is a principle that ensures the privacy of data and methods. It's an arrangement where data and methods are bound together and most of the code's privacy is ensured with other parts.

#### Interview Questions:
1. What is encapsulation?
   - Answer: Encapsulation is a principle that ensures the privacy of data and methods.

2. Can you give an example of encapsulation?
   - Answer: For instance, imagine we're creating a banking system. In this system, users' account personal information (like password, balance) must be kept private. This personal information can only be accessed from the respective class, ensuring encapsulation.


</details>
