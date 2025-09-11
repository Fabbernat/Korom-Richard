const szamok = [0, 1,2, 3, 4, 5, 6, 7, 8, 9];
const parosSzamok = [];
szamok.forEach((i) => {
  if (i % 2 === 0) {
    parosSzamok.push(i);
  }
});

console.log(parosSzamok);
const parosSzamok2 = szamok
  .filter((i) => i % 2 === 0)
  .forEach((i) => console.log("A szám: " + i));
