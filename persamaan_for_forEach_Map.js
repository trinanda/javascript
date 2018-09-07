// melihat persamaan antara (for, forEach dan map)
function persamaanForForEachMap1() {
  var dataKota = ['Payakumbuh', 'Pasaman', 'Pariaman', 'Solok', 'Batu Sangkar'];
  for (var i = 0; i < dataKota.length; i++){
    console.log(dataKota[i]);
    console.log(i);
    console.log(dataKota);
  }
}

persamaanForForEachMap1()

function persamaanForForEachMap2(){
  var dataKota = ['Payakumbuh', 'Pasaman', 'Pariaman', 'Solok', 'Batu Sangkar'];
  dataKota.forEach((item, index, array) => {
    console.log(item);
    console.log(index);
    console.log(array);
  })
}

persamaanForForEachMap2()

function persamaanForForEachMap3() {
  dataKota = ['Payakumbuh', 'Pasaman', 'Pariaman', 'Solok', 'Batu Sangkar'];
  dataKota.map((item, index, array) => {
    console.log(item);
    console.log(index);
    console.log(array);
  })
}

persamaanForForEachMap3()
