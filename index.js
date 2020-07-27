// Code your solution here

function findMatching(array, string) {
    return array.filter(function(filter_item) {
        return filter_item.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(array, string) {
    return array.filter(function (filter_item) {
        return filter_item.charAt(0) === string.charAt(0)
    })
}

function matchName(array, string) {
    return array.filter(function (filter_item) {
        return filter_item.name === string
    })
}