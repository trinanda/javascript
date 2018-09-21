// shift berfungsi untuk menghapus element paling awal pada array
function manipulationArrayWithShift(){
  var tumbuhan = ['Manggis', 'Jeruk', 'Nanas', 'Pisang']

  console.log(tumbuhan)
  console.log('=====================')

  var tumbuhan2 = tumbuhan.shift()
  console.log(tumbuhan2)
  console.log('=====================')

  return tumbuhan
}

console.log(manipulationArrayWithShift());
