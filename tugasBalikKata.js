// // dengan for loop
// function balikKata(kata) {
//   var reverseIt = '';
//   for (i = 0; i < kata.length; i++) {
//     reverseIt = kata[i] + reverseIt;
//   }
//   return reverseIt;
// }
//
// console.log(balikKata('Jakarta'));
// console.log(balikKata('Bandung'));
// console.log(balikKata('Yogyakarta'));
// console.log(balikKata('Padang'));
/*
-----------------------------------------------------------------------------------
-----------------------------------------------------------------------------------
*/
// // dengan forEach   // yang ini masih menggunakan method "split"
// function balikKata2(kata) {
//   reverseIt = '';
//   kata = kata.split('');
//   kata.forEach(function(item, index, array) {
//     reverseIt = item + reverseIt;
//   });
//   return reverseIt;
// }
// console.log(balikKata2('Sumedang'));
/*
-----------------------------------------------------------------------------------
-----------------------------------------------------------------------------------
*/
function balikKata3(kata) {
  var reverseIt = '';
  var i = 0;
  while (i < kata.length) {
    reverseIt = kata[i] + reverseIt;
    console.log(reverseIt);
    i+=1;
  }
  return reverseIt;
}
balikKata3('testing')
