// splice memiliki beberapa fungsi, yaitu untuk menyisipkan data dan menghapus data
function manipulationArrayWithSplice(){
  var hewan = ['gajah', 'harimau', 'rusa', 'badak', 'beruang']
  console.log(hewan)

  // hewan.splice(3, 0, 'semut')          // menyisipkan data
  // hewan.splice(3)                      // menyisakan 4 element yang di hitung dari index 1
  hewan.splice(1,2)                       // menghapus index ke 2 data yang di mulai dari index ke 1 

  return hewan
}

console.log(manipulationArrayWithSplice());
