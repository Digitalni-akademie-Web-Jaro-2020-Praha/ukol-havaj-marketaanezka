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

let osoba1 = {
  jmeno: 'Alena',
  uspory: 43000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

function holidays(person1, person2) {
  if ((person1.uspory + person2.uspory) >= 100000) {
      console.log("Let's go")
  } else {
      console.log(`We have to save up some more. We are missing ${100000 - (person1.uspory + person2.uspory)}`)
  }

  if (person1.uspory > 50000 && person2.uspory > 50000) {
      console.log(`Cool, both of you are covered`)
  } else {
      if (person1.uspory < 50000) {
          console.log(`Oops, looks like ${person1.jmeno} has to save ${50000 - person1.uspory} more!`)
      } else {
          console.log(`Oops, looks like ${person2.jmeno} has to save ${50000 - person2.uspory} more!!`)
      }
  }
};

holidays(osoba1, osoba2);