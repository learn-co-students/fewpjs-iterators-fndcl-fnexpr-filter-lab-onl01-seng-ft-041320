let testDrivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(drivers, str) {
    return drivers.filter((driver) => { return driver.toLowerCase() === str.toLowerCase() })
}

function fuzzyMatch(drivers, str) {
    return drivers.filter((driver) => { return driver.toLowerCase().startsWith(str.toLowerCase()) })
}

function matchName(drivers, str) {
    return drivers.filter((driver) => { return driver.name.toLowerCase() === str.toLowerCase() })
}