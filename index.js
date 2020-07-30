// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function findMatching(drivers, searchName){
  return drivers.filter(driver =>
   driver.toLowerCase() === searchName.toLowerCase()
 )
}

function fuzzyMatch(drivers, searchName){
  return drivers.filter(driver =>
   driver.startsWith(searchName)
 )
}

function matchName(drivers, searchName){
  return drivers.filter(driver =>
   driver.name === searchName
 )
}
