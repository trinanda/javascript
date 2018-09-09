// Contoh Tugas filter dan parameters

function tugasFilterParameters(value){
  ceo = [
    {Facebook: 'Mark Zuckerberg', country: 'US'},
    {GoJek: 'Nadiem Makarim', country: 'Indonesian'},
    {Alibaba: 'Jack Ma', country: 'China'},
    {Amazon: 'Jeff Bezos', country: 'US'},
    {Bukalapak: 'M. Zaki', country: 'Indonesian'}
  ];
  filterByCountry = ceo.filter(function(item) {
    return item.country === value;
  })
  return filterByCountry;
}
console.log(tugasFilterParameters('China'));
console.log(tugasFilterParameters('Indonesian'));
console.log(tugasFilterParameters('US'));
