// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(drivers, namePartial) {
    let sliceVal = namePartial.length
    return drivers.filter(driver => {
        return driver.substring(0, sliceVal) === namePartial
    })
}

function matchName(drivers, name) {
    return drivers.filter(driver => {
        return driver.name === name
    })
}