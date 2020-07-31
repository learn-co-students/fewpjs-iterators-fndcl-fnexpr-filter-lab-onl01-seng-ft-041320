// Code your solution here
function fuzzyMatch(drivers, str) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(str.toLowerCase()))
}

function findMatching(drivers, str) {
    return drivers.filter(driver => driver.toLowerCase().includes(str.toLowerCase()))
}

function matchName(drivers, str) {
    return drivers.filter(driver => driver.name === str)
}