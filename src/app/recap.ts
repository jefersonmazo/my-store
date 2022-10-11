import { NumberValueAccessor } from "@angular/forms";

const username: string | number = 'Jeferson';   //String y number se utilizan para especificar que datos se deben tener en esa variable.
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1,8);

class Person {
  // age: number;
  // lastName: string;

  constructor(public age: number, public lastName: string) {
    // this.age = age;
    // this.lastName = lastName;
  }
}

const jefer = new Person(27, 'Molina');
jefer.age;
