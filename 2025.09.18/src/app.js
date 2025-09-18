var myname = "John Doe";
var age = 30;
var isDeveloper = true;
var skills = ["JavaScript", "TypeScript", "React"];
var tupleExample = ["TypeScript", 2024];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var randomValue = 10;
randomValue = "Now it's a string";
randomValue = true;
console.log("Name: " + myname);
console.log("Age: " + age);
console.log("Is Developer: " + isDeveloper);
console.log("Skills: " + skills.join(", "));
console.log("Tuple Example: " + tupleExample);
console.log("Color Enum Value: " + c);
console.log("Random Value: " + randomValue);
var szemely1 = {
    nev: "Alice",
    kor: 28,
    magassag: 165,
};
var szemely2 = {
    nev: "Bob",
    kor: 32,
    magassag: 180,
};
var emberek = [szemely1, szemely2];
emberek.forEach(function (szemely) {
    console.log("".concat(szemely.nev, " is ").concat(szemely.kor, " years old and ").concat(szemely.magassag, " cm tall."));
});
