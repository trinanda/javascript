// flags "w" berfungsi untuk mengambil semua karakter, baik itu huruf, angka maupun spasi
function regexpHurufAngkaSpasi(value) {
  var ambilData = value.match(/\w/g);
  console.log(ambilData);

}
regexpHurufAngkaSpasi('Bulan ke 1 sd ke 4');

// flags "d" berfungsi hanya untuk mengambil angka
function regexpHurufAngkaSpasi2(value) {
  var ambilData = value.match(/\d/g);
  console.log(ambilData);
}
regexpHurufAngkaSpasi2('Bulan ke 1 sd ke 4');

// flags "s" berfungsi untuk mengambil Spasi
function regexpHurufAngkaSpasi3(value) {
  var ambilData = value.match(/\s/g);
  console.log(ambilData);
  console.log('Banyaknya Spasi : ', ambilData.length);
}
regexpHurufAngkaSpasi3('Bulan ke 1 sd ke 4');
