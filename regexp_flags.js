// flags "i" berfungsi untuk membuat pencarian kata menjadi case-insensitive
function belajarRegexpFlags(){
  let dataHuruf = 'abcdefghijklmnopqrstuvwxyz';

  console.log(dataHuruf.search(/K/));
  console.log(dataHuruf.search(/K/i));
  console.log(dataHuruf.search(/k/i));
}

belajarRegexpFlags();
