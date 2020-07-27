// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driver => {
        if (driver.toLowerCase() === name.toLowerCase()) {
            return driver;
        }
    })
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(letters.toLowerCase()) === 0
    )
  }

  function matchName(drivers, name) {
    return drivers.filter( record => record.name === name)
  }