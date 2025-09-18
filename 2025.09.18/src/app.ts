const myname: string = "John Doe";
const age: number = 30;
const isDeveloper: boolean = true;

const skills: string[] = ["JavaScript", "TypeScript", "React"];
const tupleExample: [string, number] = ["TypeScript", 2024];

enum Color {
  Red,
  Green,
  Blue,
}

const c: Color = Color.Green;

let randomValue: any = 10;
randomValue = "Now it's a string";
randomValue = true;

console.log("Name: " + myname);
console.log("Age: " + age);
console.log("Is Developer: " + isDeveloper);
console.log("Skills: " + skills.join(", "));
console.log("Tuple Example: " + tupleExample);
console.log("Color Enum Value: " + c);
console.log("Random Value: " + randomValue);


type Szemely = {
  nev: string;
  kor: number;
  magassag: number;
};

const szemely1: Szemely = {
  nev: "Alice",
  kor: 28,
  magassag: 165,
};

const szemely2: Szemely = {
  nev: "Bob",
  kor: 32,
  magassag: 180,
};  

const emberek: Szemely[] = [szemely1, szemely2];

emberek.forEach((szemely) => {
  console.log(`${szemely.nev} is ${szemely.kor} years old and ${szemely.magassag} cm tall.`);
});