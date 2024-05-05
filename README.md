
### Type Guard ব্যবহার করা Typeof এবং In দিয়ে:

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

### Getter এবং Setter:

#### বর্ণনা:
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

### Polymorphism:

#### বর্ণনা:
Polymorphism হল একটি কনসেপ্ট যা বলে যে একটি মেথড বা প্রোপার্টি পুনরাবৃত্তি নেয়, কিন্তু বিভিন্ন ক্লাসে একে অন্য ধরনে পরিবর্তে সৃষ্টি হয়। 

#### Interview Questions:
1. What is polymorphism in TypeScript?
   - Answer: Polymorphism is a concept where a method or property can take different forms but behaves differently in different classes.

2. How do you achieve polymorphism in TypeScript?
   - Answer: Polymorphism in TypeScript can be achieved through method overriding and method overloading.

I hope this helps you understand these concepts better! Let me know if you have any further questions.




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
<summary> What is     </summary>
<br >


```js 

```
</details> 
<details>
<summary> What is     </summary>
<br >


```js 

```
</details> 
<details>
<summary> What is     </summary>
<br >


```js 

```
</details> 