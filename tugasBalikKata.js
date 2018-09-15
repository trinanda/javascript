function balikKata(kata) {
  // jawaban:
  // return kata.split('').reverse().join('')  // tidak boleh menggunakan dari ketiga method ini
  balikKan = [];    // membuat sebuah variable array kosong untuk menampung data nanti nya
  // untuk iterasi i = 0; jika nilai i masih kecil dari panjang ('nilai yang di dimasukan ke dalam parameter "kata"'); tambahkan terus nilai i;
  for (i = 0; i < kata.length; i++) {
    // balikKan = kata[i] + balikKan;   // cara 1. (cara ini saya copas dari stackoferflow.com, namun tidak memiliki keterangan yang jelas)// saya tidak mengerti kenapa pada baris ini bisa membalikkan kata
      // balikKan = kata[i] + [];    // pertama saya mengganggap bahwa nilai dari variable "balikKan" adalah sama dengan ini "[]", tapi ternyata baris ini tidak sama dengan hasil di atas
      // balikKan = kata[i] + '';    // dan kemudian saya mencoba cara ini dengan menganggap bahwa nilai dari variable "balikKan" adalah string kosong atau (""), tapi ternyata cara ini tetap tidak menghasilkan hasil yang diharapkan

      var testing = [];             // saya mencoba membuat array kosong lagi
      balikKan = kata[i] + testing; // dan mencoba menambahkan array kosong tersebut pada variable ini (balikKan), tapi hasil nya masih tidak sama
    /*
      Jadi pertanyaaan nya, kenapa cara 1. tersebut bisa berhasil..?
    */
  }
  return balikKan;  // kembalikan nilai dari variable
}

// testCase
console.log(balikKata('Niomic!'));
console.log(balikKata('Javascript'));
console.log(balikKata('alohahola'));
console.log(balikKata('Sumatera_Barat'));
