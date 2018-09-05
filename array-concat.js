function extendsArray(){
  var ternak = ['Kambing', 'Kerbau', 'Belut']
  var tanaman = ['Manggis', 'Jeruk', 'Jagung']
  var pet = ['kucing', 'doggie', 'kura-kura']

  var gabungKan = tanaman.concat(ternak, pet)

  return gabungKan
}

console.log(extendsArray());
