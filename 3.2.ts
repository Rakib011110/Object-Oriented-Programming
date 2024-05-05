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
