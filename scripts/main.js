const tagokMagassagai = {
    "Csőke Zalán": { height: 191 },
  "Fekete Zente": { height: 177 },
  "Fábián Bernát": { height: 195 },
  "Gurbán Ákos": { height: 182 },
  "Gyalog Patrik": { height: 189 },
  "Kis Barnabás": { height: 196 },
  "Licsicsányi Boglárka Csenge": { height: 157 },
  "Ocskó Lilla": { height: 159 },
  "Pál Patrik": { height: 190 },
  "Wittner Attila": { height: 175 },
  "Zsiga Norbert": { height: 188 },
  "Tanár Úr": { height: 177, hossz: 10.9}
}

function main() {
  let osszeg = 0;
  let length = 0;

  for (const key in tagokMagassagai) {
    if (tagokMagassagai[key].height !== undefined) {
      osszeg += tagokMagassagai[key].height;
      length++;
    }
  }

  console.log(osszeg / length);
}

main();