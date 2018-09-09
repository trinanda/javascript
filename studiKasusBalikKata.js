function tugasBaliKata(theWords) {
  return theWords.split('').reverse().join('');
  /* pembahasan untuk return diatas adalah:
      1. kembalikan (return) nilai dari parameters theWords
      2. kemudian jadikan semua kata yang masuk ke dalam parameters tersebut menjadi sebuah array meggunakan fungsi "split"
      3. Dan balikan setiap element pada array tersebut menggunakan fungsi "reverse"
      4. kemudian jadikan array tersebut kembali menjadi sebuah string menggunakan fungsi "join"
  */
}

console.log(tugasBaliKata('Niomic!'));
console.log(tugasBaliKata('Javascript'));
console.log(tugasBaliKata('alohahola'));
console.log(tugasBaliKata('Sumatera_Barat'));
