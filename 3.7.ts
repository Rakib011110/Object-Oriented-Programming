/* 
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
     ``` */
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
