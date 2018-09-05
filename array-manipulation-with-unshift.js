function manipulationArrayWithUnshift(){
  var buku = ['Belajar Otodidak Flask', 'Pemograman Python dan Implementasi', 'Mudah Belajar Python']
  console.log(buku)

  // menyisipkan element di awal array atau mulai dari index ke 0
  buku.unshift('Kumpulan Solusi Pemograman Python', 'Habis Gelap Terbitlah Terang')
  console.log(buku)

  buku.unshift('Seni Berbicara')

  return buku
}

console.log(manipulationArrayWithUnshift());
