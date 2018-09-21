// mencari semua karakter "ke" dan menjadikan nya array
function specificCharacter(value) {
  var ambilData = value.match(/\ke/g);
  console.log(ambilData);
}
specificCharacter('mereka kesini dengan mereke kenapa kesini');

// mengambil huruf atau lebih spesifik lagi dari cara yang di atas
function specificCharacter2(value) {
  var ambilData = value.match(/[sl]/g);
  console.log(ambilData);
}
specificCharacter2('As You think so shall you become');

// membuang karakter atau huruf yang tidak di inginkan
function specificCharacter3(value) {
  var ambilData = value.match(/[^sta]/g);
  console.log(ambilData);
}
specificCharacter3('Just have to get started');

// untuk mengambil karakter antara kerakter tertentu
function panggilRegexp(value) {
   var ambilData = value.match(/[m-q]/ig);
   console.log(ambilData);
}

panggilRegexp("a b c d e f g h i J K L m n o p q r s t u v w x Y Z");
