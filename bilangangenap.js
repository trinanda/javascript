// mencari bilangan genap
function mencariBilanganGenap() {
  var tampungGenap = []
  for(i=1; i<=30; i++){
    if(i%2 === 0){
      tampungGenap.push(i);
    }
  }
  return tampungGenap;
}

console.log(mencariBilanganGenap());

//--------------------------------------

// Tugas mencari bilangan ganjil
function mencariBilanganGanjil(){
  var tampungGanjil = [];
  for(i=10; i<=45; i++){
    if(i%2 === 1){
    // if(i%2 != 0){                  // cara kedua untuk mencari bilangan ganjil
      tampungGanjil.push(i);
    }
  }
  return tampungGanjil;
}

console.log(mencariBilanganGanjil());
