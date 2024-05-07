/* ### Polymorphism:

#### বর্ণনা:
Polymorphism হল একটি কনসেপ্ট যা বলে যে একটি মেথড বা প্রোপার্টি পুনরাবৃত্তি নেয়, কিন্তু বিভিন্ন ক্লাসে একে অন্য ধরনে পরিবর্তে সৃষ্টি হয়। 

#### Interview Questions:
1. What is polymorphism in TypeScript?
   - Answer: Polymorphism is a concept where a method or property can take different forms but behaves differently in different classes.

2. How do you achieve polymorphism in TypeScript?
   - Answer: Polymorphism in TypeScript can be achieved through method overriding and method overloading.
 */

{
  class Person {
    getSleep() {
      console.log(`i am sleeping for 8 hour per day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`i am sleeping for 7 hour per day`);
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log(`i am sleeping for 6 hour per day`);
    }
  }
  const getSleepingHour = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHour(person1);
  getSleepingHour(person2);

  class Shape {
    getArea(): number {
      return 0;
    }
  }
  //  pi* r* r

  class circle extends Shape {
    redius: number;
    constructor(redius: number) {
      super();
      this.redius = redius;
    }
    getArea(): number {
      return Math.PI * this.redius * this.redius;
    }
  }

  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(hieght: number, width: number) {
      super();
      this.height = hieght;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapArea = (param: Shape) => {
    console.log(param.getArea());
  };
  const shap1 = new Shape();
  const shap2 = new circle(10);
  const shap3 = new Rectangle(30, 70);

  getShapArea(shap3);
}
