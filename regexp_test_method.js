// method test berfungsi untuk melakukan pengecekan apakah data/string yang kita cari ada di dalam variable yang akan kita lakukan "test"
// function belajarRegexpTestMethod() {
//   let data = 'Belajar Satu Tahun Bersama Niomic';
//
//   console.log(/satu/.test(data));
// }
//
// belajarRegexpTestMethod();

// tugas
function tugasMethodTestRegexp(value) {
  // the answers is..
  if (/html/.test(value) == true) {
    console.log(value);
  }
  if (/Javascript/.test(value) == true) {
    console.log(value.replace(/Javascript/, ''));
  }
  if (/css/.test(value) == true) {
    console.log(value);
  }
  if (/Python/.test(value) == true) {
    console.log(value.replace(/Python/, ''));
  }
}

tugasMethodTestRegexp('Belajar html');
tugasMethodTestRegexp('Belajar Javascript');
tugasMethodTestRegexp('Belajar css');
tugasMethodTestRegexp('Belajar Python');
