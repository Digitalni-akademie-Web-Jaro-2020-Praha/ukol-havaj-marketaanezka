// 3. Dvě kamarádky se rozhodly, že pojedou spolu na dovolenou.
// Jde o drahou dovolenou na Havaj, takže mohou jet pouze pokud součet
// jejich úspor přesahuje 100 tisíc korun.
// Kamarádky se rozhodly, že budou platit všechno napůl, takže každá by
// měla platit 50 tisíc, ale hrozně se na dovolenou těší, takže vyrazí
// okamžitě, jakmile budou mít dohromady 100 tisíc, i kdyby jedna z nich
// měla platit víc. Dluh vyrovnají po dovolené.

// Napiš sérii podmínek, která zjistí (do konzole vypíše):
// - zda vůbec mohou nebo nemohou na dovolenou jet

// - pokud mohou jet (tj. mají dohromady 100 tisíc):
//   - napiš, zda obě mají naspořeno dost (každá alespoň 50 tisíc)
//   - nebo pokud má jedna kamarádka méně, tak napiš její jméno a kolik jí
//     ještě chybí do 50 tisíc a tudíž kolik bude muset po dovolené splatit

// - pokud nemohou jet (tj. nemají dohromady 100 tisíc), tak napiš
//   - kolik peněz jim celkově ještě chybí
//   - kolik musí každá z nich ještě naspořit

function holidays(person1, person2) {
  const together = (person1.uspory + person2.uspory)
  const money1 = person1.uspory;
  const money2 = person2.uspory;
  if (together >= 100000) {
    console.log(`Let's go, together we have enough!, we have ${together}`)
    if (money1 > 50000 && money2 > 50000) {
      console.log(`Cool, both of you are covered`)
    } else if (money1 < 50000) {
      console.log(`${person1.jmeno} will have to pay ${50000 - money1}`)
    } else {
      console.log(`${person2.jmeno} will have to pay ${50000 - money2}`)
    }

  } else {
    console.log(`We have to save up some more. We are missing ${100000 - together}`)
    if (money1 < 50000) {
      console.log(`${person1.jmeno} is missing ${50000 - money1}`)
    } else if (money2 < 50000) {
      console.log(`${person2.jmeno} is missing ${50000 - money2}`)
    }
  }
  return `together ${together}, p1 is ${50000 - money1} away, p2 is ${50000 - money2} away`
};


function test(person1, person2, result) {
  if (holidays(person1, person2) === result) {
    console.log("test passed");
  } else {
    console.log("test failed");
  }
}

let osoba1 = {
  jmeno: 'Alena',
  uspory: 43000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};
const result1 = `together ${111000}, p1 is ${7000} away, p2 is ${-18000} away`
test(osoba1, osoba2, result1);

let osobaI = {
  jmeno: 'Filip',
  uspory: 55000
};
let osobaII = {
  jmeno: 'Lucka',
  uspory: 32000
};
let resultI = `together ${87000}, p1 is ${-5000} away, p2 is ${18000} away`
test(osobaI, osobaII, resultI);

let osobaA = {
  jmeno: 'Zdenek',
  uspory: 48000
};
let osobaB = {
  jmeno: 'Jachym',
  uspory: 51000
};
let resultAB = `together ${99000}, p1 is ${2000} away, p2 is ${-1000} away`
test(osobaA, osobaB, resultAB);

let osobaX = {
  jmeno: 'Simona',
  uspory: 62000
};
let osobaY = {
  jmeno: 'Zaneta',
  uspory: 58000
};
let resultXY = `together ${120000}, p1 is ${-12000} away, p2 is ${-8000} away`
test(osobaX, osobaY, resultXY);

