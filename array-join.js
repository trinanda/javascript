// fungsi join berfungsi untuk merubah array menjadi string, dan di pisahkan berdasarkan keyword yang dimasukan
function convertArrayToString() {
  var senjata = ['sword', 'axe', 'dagger', 'magic']
  console.log(senjata);

  var convertItToString = senjata.join(' ')
  return convertItToString;
}

console.log(convertArrayToString());
