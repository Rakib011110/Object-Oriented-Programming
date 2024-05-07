{
  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }
  //  real implements
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
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;

    test() {
      console.log(`i am testing`);
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`i am starting the car engine`);
    }

    stopEngine(): void {
      console.log(" i am stopping engine");
    }
    move(): void {
      console.log(` i am moving`);
    }
  }
  // const hondaCar = new Car2();
  //
}
