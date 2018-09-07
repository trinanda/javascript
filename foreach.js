// forEach adalah "for" yang biasanya di kususkan untuk array
function belajarForEeach(){
  dataArray = ['tomato', 'banana', 'potato', 'mango', 'orange']
  dataArray.forEach(function(item, index, array){
    console.log(item);
    console.log(index);
    console.log(array);
  })
}

belajarForEeach()
