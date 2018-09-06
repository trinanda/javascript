function mencariBilanganGanjil(){
  var tampungGanjil = []
  for(i = 1; i <= 30; i++){
    if(i%2 !== 0){
      tampungGanjil.push(i)
    }
  }
  return tampungGanjil
}

console.log(mencariBilanganGanjil());

// tugas mencari kelipatan 5
function mencariKelipatanLima() {
  var tampungKelipatan = []
  for(i = 1; i <= 50; i++){
    if(i%5 === 0){
      tampungKelipatan.push(i)
    }
  }
  return tampungKelipatan
}

console.log(mencariKelipatanLima());
