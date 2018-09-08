/*
---------------------------------------------------------------------------------------------------------------------
    1. for
        - dapat melakukan perulangan berdasarkan panjang dari array
        - dapat melakukan perulangan dengan jumlah yang telah ditentukan
        - tidak dapat membuat array baru, jika ingin memasukan data ke array harus menggunakan perintah push
        - eg:

            var kota = ['Padang', 'Payakumbuh', 'Bukittingi'];
            var newArrayKota = [];
            for (i = 0; i < kota.length; i++){
              newArrayKota.push(kota[i]);
            }
            console.log(newArrayKota);
---------------------------------------------------------------------------------------------------------------------

    2. forEach
        - dapat melakukan perulangan berdsarkan panjang dari array
        - tidak dapat melakukan perulangan berdasarkan jumlah yang telah ditentukan
        - tidak dapat membuat array baru, jika ingin memasukan data ke array harus menggunakan perintah push
        - eg:

            var kota = ['Padang', 'Payakumbuh', 'Bukittingi'];
            var newArrayKota = [];
            kota.forEach((item, index, array) => {
              return newArrayKota.push(item);
            })
            console.log(newArrayKota);

---------------------------------------------------------------------------------------------------------------------

    3. map
        - dapat melakukan perulangan berdasarkan panjang dari array
        - tidak dapat melakukan perulangan dengan jumalh yang telah ditentukanconsole.log(makeArrayUsingFor());

        - dapat langsung membuat array baru tanpa menggunakan tambahan dari perintah push
        - for example how to make new array using map command you can see the code bellow:
        - eg:

            var kota = ['Padang', 'Payakumbuh', 'Bukittingi'];
            var newArrayKota = kota.map((item, index, array) => {
              return item;
            })
            console.log(newArrayKota);

---------------------------------------------------------------------------------------------------------------------
Kesimpulan nya adalah:
      - Jika Kita ingin melalukan perulangan berdasarkan jumlah data yang sudah ditentukan, maka gunakanlah "for"
      - Jika Kita ingin melakukan perulangan berdsarkan panjang array, dan tidak ingin mencetak array baru lagi, maka gunakanlah "forEach"
      - Jika Kita ingin melakukan perulangan dan ingin menghasilkan array baru, maka gunakanlah "map" 


*/
