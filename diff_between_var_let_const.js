
var satu = 1          /* nilai nya bisa di ubah dimana pun posisinya */

let dua = 2           /* nilai hanya bisa di ubah pada satu tempat, jika sudah berubah
                        posisi misalnya di dalam kondisional atau function maka hanya
                        akan berlaku di dalam function atau kondisional tersebut */

const tiga = 3       /* nilai nya tetap */

if(true){
  var satu = 'satu';    /* ini membuktikan bahwa var bisa dirubah */
  let dua = 'dua';      /* ini membuktikan bahwa nilai let hanya berlaku di dalam posisi tertentu */
  console.log('testing', dua); 
}

console.log(satu);
console.log(dua);
