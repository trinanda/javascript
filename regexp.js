// regular expresion berfungsi untuk mencari atau mengganti pada sebuah data string
// ini masih tanpa "flags", jadi hanya akan di cek berdasarkan index paling pertama yang di temukan
function belajarRegeXP() {
  let dataHuruf = 'abcdefghijklmnopqrstuvwxyz';

  return dataHuruf.search(/e/)
}

console.log(belajarRegeXP());
