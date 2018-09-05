function conditionalDataType(){
  var number = 1
  console.log(typeof(number))

  // if(number == '1'){     // ini akan terbaca sama karena tanda sama dengan nya cuma 2
  if(number === '1'){       // kalau tanda sama dengan nya tiga, maka akan lebih spesifik, maka nilai ini akan berbeda
    return 'Hebat'
  }
  else{
    return 'ulangi terus'
  }
}

console.log(conditionalDataType());
