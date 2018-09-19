function taskNestedArrayAndLooping(value) {
  var tampungData_satu = [];
  var tampungData_dua = [];
  var tampungData_tiga = [];
  var tampungData_empat = [];
  var semuaData = [];
  for (i = 0; i < value.length; i++) {
    dataSatu = value[i][0];
    dataDua = value[i][1];
    dataTiga = value[i][2];
    dataEmpat = value[i][3];
    tampungData_satu.push(dataSatu);
    tampungData_dua.push(dataDua);
    tampungData_tiga.push(dataTiga);
    tampungData_empat.push(dataEmpat);
  }
  semuaData.push(tampungData_satu, tampungData_dua, tampungData_tiga, tampungData_empat);
  console.log(semuaData);
}

var friendList = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
];

taskNestedArrayAndLooping(friendList);
