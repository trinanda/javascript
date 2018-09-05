// split berfungsi untuk menjadikan string menjadi array berdasarkan keyword yang kita ingin jadikan pemisah

function menjadikanArray(){
  var introduction = 'nama, saya Tri, saya tinggal di Tarantang, salam kenal ya'
  console.log(introduction);

  jadikanArray = introduction.split(',')

  return jadikanArray
}

console.log(menjadikanArray());
