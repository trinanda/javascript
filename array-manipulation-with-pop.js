// pop berfungsi untuk menghapus array pada index yang paling terakhir pada array
function manipulationArrayWithPop(){
  var negara = ['Rusia', 'Kroasia', 'Tunisia', 'Italia']
  console.log(negara)

  var removeTheLastOne = negara.pop()
  console.log(removeTheLastOne)

  return negara
}

console.log(manipulationArrayWithPop())
