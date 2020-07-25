// Code your solution here

//takes an array of drivers and a string as arguments, 
// and returns the matching list of drivers. 
// The function should be case insensitive

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, string) {
    let matchingArray = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return matchingArray
}

// takes an array of drivers and a string as arguments 
// for querying the array, and 
// returns all drivers whose names begin with the provided letters
function fuzzyMatch(drivers, string) {
    let nameBeginsWith = drivers.filter(driver => driver.startsWith(string))
    return nameBeginsWith
}

// takes an array of drivers and a string as arguments. 
// each element of the drivers array is a JavaScript object 
// that has a property of name. 
// The function should return each element 
// whose name property matches the provided string argument
// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];
function matchName(drivers, string) {
    let matchingObject = drivers.filter( driver => driver.name === string)
    return matchingObject
}

