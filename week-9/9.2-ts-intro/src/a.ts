// note: interface can be implemented by class
// note: type let you do union and intersection
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Employee implements Person {
  constructor(public name: string, public age: number) {}

  greet(phrase: string) {
    console.log(`${phrase}, ${this.name}`);
  }
}

const employee = new Employee("John", 30);
employee.greet("Hello");

type User = {
    id:number | string;
}
    
function getUser(id: User) {
  return id;
}

getUser( {id:1} );
