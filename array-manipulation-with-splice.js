function manipulationArrayWithSplice(){
  var hewan = ['gajah', 'harimau', 'rusa', 'badak', 'beruang']
  console.log(hewan)

  hewan.splice(3, 0, 'semut')

  return hewan
}

console.log(manipulationArrayWithSplice());
