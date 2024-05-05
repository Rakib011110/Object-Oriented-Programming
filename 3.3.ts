/* 

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

*/

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
