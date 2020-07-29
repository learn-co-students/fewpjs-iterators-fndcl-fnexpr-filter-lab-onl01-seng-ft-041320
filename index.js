
function findMatching(drivers, string) {
    return drivers.filter( eachDriver =>
        eachDriver.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( eachDriver =>
        eachDriver.toLowerCase().indexOf(string.toLowerCase()) === 0
    )
}

function matchName(drivers, string) {
    return drivers.filter( record => record.name === string )
}
