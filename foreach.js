// forEach mirip dengan perulangan for, namun forEach membutuhkan sebuah array untuk melakukan perulangan
function belajarForEeach(){
  dataArray = ['tomato', 'banana', 'potato', 'mango', 'orange']
  dataArray.forEach(function(item, index, array){
    console.log(item);
    console.log(index);
    console.log(array);
  })
}

belajarForEeach()
