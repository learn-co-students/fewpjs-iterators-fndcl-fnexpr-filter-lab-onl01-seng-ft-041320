function findMatching(arr, string){
  let drivers = arr.filter(n => {
      if (n.toLowerCase() === string.toLowerCase()){
        return n
      }
  })
  return drivers
}

function fuzzyMatch(array, string){
  return array.filter ( match => 
    match.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(object, name){
  return object.filter( value => value.name === name)
}