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
  name: 'Max',
  age: 32
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
  }
];

let abc: any;

// Union type
let a: (string | number);
a = 'abc';
a = 1234;

// Union type
let x: (number | number[]);
x = [1, 4, 7];
x = 7;
