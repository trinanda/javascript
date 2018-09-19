// flags "i" berfungsi untuk membuat pencarian kata menjadi case-insensitive
// ini juga hanya akan mengecek kata berdasarkan index yang paling pertama ditemukan
function belajarRegexpFlags(){
  let dataHuruf = 'abcdefghijklmnopqrsktuvkwxyzk';

  console.log(dataHuruf.search(/K/));
  console.log(dataHuruf.search(/K/i));
  console.log(dataHuruf.search(/k/i));
}

belajarRegexpFlags();
