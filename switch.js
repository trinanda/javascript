function cuaca(){
  var suhu = 27

  switch(suhu){
    case 35:
      console.log('Panas')
      break;
    case 27:
      console.log('normal');
      break;
    case 21:
      console.log('dingin');
      break;
    case 5:
      console.log('Beku');
      break;
    default:
      console.log('Invalid')
  }
}

cuaca()
