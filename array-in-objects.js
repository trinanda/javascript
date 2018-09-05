function belajarArrayInObjects(){
  var buku = {
    judul: 'Belajar Python',
    penulis: 'Budi Raharjo',
    penerbit: 'Informatika',
    tahunTerbit: [2000, 2001, 2003, 2005]
  }
  console.log(buku.tahunTerbit)
  console.log(buku.tahunTerbit[2])
}

belajarArrayInObjects()
