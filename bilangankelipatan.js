function mencariKelipatan(){
  tampungNilaiKelipatan = []
  for(i = 1; i <= 40; i++)
  if(i%4 === 0){
    tampungNilaiKelipatan.push(i)
  }
  return tampungNilaiKelipatan
}

console.log(mencariKelipatan());
