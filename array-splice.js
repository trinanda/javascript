function arraySplice(){
  var hewan = ['harimau','macan','singa','monyet','jerapah','semut','tikus','gagak'];
  console.log(hewan);

  // splice bisa untuk menyisipkan data dan juga menghapus data sesuai index yang diinginkan
  hewan.splice(4,1,'beruang');

  return hewan;
}

console.log(arraySplice());
