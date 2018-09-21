// // "W" besar/kapital akan mengambil semua karakter kecuali huruf dan angka
// function regexpNotHurufAngkaSpasi(value) {
//   var ambilData = value.match(/\W/g);
//   console.log(ambilData);
// }
// regexpNotHurufAngkaSpasi('Bulan ke 1 sd ke 4 % $ &');

//// "D" besar/kapital akan mengambil semua karakter dan spasi kecuali angka
// function regexpNotHurufAngkaSpasi2(value) {
//   var ambilData = value.match(/\D/g);
//   console.log(ambilData);
// }
// regexpNotHurufAngkaSpasi('Bulan ke 1 % $ !');

// // "S" besar/kapital akan ambil semua karakter kecuali spasi
function regexpNotHurufAngkaSpasi3(value) {
  var ambilData = value.match(/\S/g);
  console.log(ambilData);
}
regexpNotHurufAngkaSpasi3('Bulan ke 1 % $ !');
