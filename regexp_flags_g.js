// flags "g" berfungsi untuk mencari data yang sama di semua string yang kita jadikan acuan untuk mencocokkan data tersebut
function belajarRegexpFlags_G(){
  let dataHuruf = 'abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz';

  console.log(dataHuruf.match(/c/g));
}

belajarRegexpFlags_G();
