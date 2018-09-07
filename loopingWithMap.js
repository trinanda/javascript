function loopingWithMap(){
  theArray = ['Mozart', 'Bethoven', 'Bach', 'Vivaldi']
  theArray.map((items, index, array) => {
    console.log(items);
    console.log(index);
    console.log(array);
  })
}

loopingWithMap()
