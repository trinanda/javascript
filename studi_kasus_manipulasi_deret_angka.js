function deretAngka(n) {
  // the answers is
  allOfNumber = [];
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0){
      allOfNumber += ' MOD_3 ';
    }
    else if(i % 5 === 0) {
      allOfNumber += ' MOD_5 ';
    }
    else {
      allOfNumber += ' ' + i;
    }
  }
  return allOfNumber;
}
console.log(deretAngka(25));
