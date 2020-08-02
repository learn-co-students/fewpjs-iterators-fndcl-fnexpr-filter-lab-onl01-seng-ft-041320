// Code your solution here

function findMatching(arr, str) {
    let drivers = arr.filter(ele => {
        if (ele.toLowerCase() === str.toLowerCase()) {
            return ele
        }
    })

    return drivers
}

function fuzzyMatch(arr, str) {
    return arr.filter(ele =>
        ele.toLowerCase().indexOf(str.toLowerCase()) === 0)
}

function matchName(arrOfObj, str) {
    return arrOfObj.filter(obj => obj.name === str)
}