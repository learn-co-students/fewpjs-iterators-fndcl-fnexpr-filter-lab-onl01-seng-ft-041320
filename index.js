function findMatching(drivers, str) {
    return drivers.filter( m =>
        m.toLowerCase() === str.toLowerCase())
}
  function matchName(drivers, str) {
    return drivers.filter( m => m.name === str)
  }
  function fuzzyMatch(drivers, str) {
    return drivers.filter(m => { 
        return m.startsWith(str);
    })
}