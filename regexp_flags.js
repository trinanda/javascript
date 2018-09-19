function belajarRegexpFlags(){
  let dataHuruf = 'abcdefghijklmnopqrstuvwxyz';

  console.log(dataHuruf.search(/K/));
  console.log(dataHuruf.search(/K/i));
  console.log(dataHuruf.search(/k/i));
}

belajarRegexpFlags();
