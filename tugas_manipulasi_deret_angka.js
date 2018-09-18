function deretAngka(n) {
  var tampungData = '';
  for (i = 1; i <= n; i ++) {
    if (i % 15 === 0){
      tampungData += ' NIOMIC ';
    }
    else if (i % 3 === 0) {
      tampungData += ' NIO ';
    }
    else if(i % 5 === 0) {
      tampungData += ' MIC '
    }
    else {
      tampungData += ' ' + i;
    }
  }
  return tampungData;
}
console.log(deretAngka(10));
console.log(deretAngka(20));
console.log(deretAngka(30));
