// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;
age = 12;


let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

// More complex types
let hobbies: string[]; // Type definition for array
hobbies = ["Sports", "Cooking"];

// Type definition of object
let person: {
  name: string;
  age: number;
};
person = {
  name: "Max",
  age: 32,
};

// Type definition for array of objects
let people: {
  name: string;
  age: number;
}[];
people = [
  {
    name: "Max",
    age: 32,
  },
];

let abc: any;

// Union type
let a: string | number;
a = "abc";
a = 1234;

// Union type
let x: number | number[];
x = [1, 4, 7];
x = 7;

// Type Aliases
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

let carYear: CarYear = 2001;
let carType: CarType = "Toyota";
let carModel: CarModel = "Corolla";
let car: Car;
let carArray: Car[];

// Functions & types
function sum(a: number, b: number): number {
  return a + b;
}

function add(a: number, b: number) {
  return a + b;
}

function printt(value: any) {
  console.log(value);
}

/*
Generics - Generics offer a way to create reusable components.
Generics provide a way to make components work with any data type and not restrict to one data type.
So, components can be called or used with a variety of data types. Generics in TypeScript is almost similar to C# generics.

TypeScript introduced generics.
Generics uses the type variable <T>, a special kind of variable that denotes types.
The type variable remembers the type that the user provides and works with that particular type only.
This is called preserving the type information.
Generics makes it easier to write reusable code.
*/
function insertAtBeginning<T> (array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "e");

// updatedArray[0].split('');
