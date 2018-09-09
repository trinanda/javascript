/*
---------------------------------------------------------------------------
method filter berfungsi untuk menyaring array dengan kondisi tertentu
---------------------------------------------------------------------------

---------------------------------------------------------------------------
menyaring array dengan kodisi yang di inginkan menggunakan "for"
// arr = [1,2,3,4,5]
// arrGanjjil = []
// for (i = 0; i < arr.length; i++){
//   if (arr[i] % 2 !== 0){
//     arrGanjjil.push(arr[i]);
//   }
// }
// console.log(arrGanjjil);
---------------------------------------------------------------------------
*/
/*
---------------------------------------------------------------------------
menyaring array dengan kondisi yang diinginkan menggunakan method "filter"
var arr = [1,2,3,4,5]
var arrGanjjil = arr.filter(function(el) {
  return el % 2 !== 0;
})
console.log(arrGanjjil);
---------------------------------------------------------------------------
*/

/*
---------------------------------------------------------------------------
Latihan
---------------------------------------------------------------------------
*/
function learnHowToUseFilterMethod(){
  var domisili = [
    {Kota: 'Payakumbuh', Provinsi: 'Sumatera Barat'},
    {Kota: 'Duri', Provinsi: 'Riau'},
    {Kota: 'Pekanbaru', Provinsi: 'Riau'},
    {Kota: 'Padang', Provinsi: 'Sumatera Barat'},
    {Kota: 'Bukit Tinggi', Provinsi: 'Sumatera Barat'},
    {Kota: 'Langgam', Provinsi: 'Riau'},
  ];
  var filterByProvinsi = domisili.filter(function(item) {
    return item.Provinsi === 'Riau';
  })
  return filterByProvinsi;
}
console.log(learnHowToUseFilterMethod());
