const valaki = { nev: "Valaki", kor: 25 };

console.log(valaki.kor);

const emberek = [
  { nev: "A", kor: 37 },
  { nev: "B", kor: 34 },
  { nev: "C", kor: 33 },
];
const fiatalok = emberek.filter((i) => i.kor <= 25);
fiatalok.forEach((i) => {
  console.log(i.nev);
});

const keres = emberek.find((i) => i.kor === 25);
console.log(keres.nev);
