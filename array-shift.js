function arrayShift(){
  var grocerry_list = ['Banana','Mango','Pineaple','Orange','Grape'];
  console.log('daftar buah yang tersedia', grocerry_list)
  console.log('=====================================================')

  beli_buah = grocerry_list.shift();
  console.log('buah yang di ambil = ', beli_buah);

  return 'sisa buah ' + grocerry_list
}

a = arrayShift()
console.log(a);
