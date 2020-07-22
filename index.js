// Code your solution here
function findMatching(array, string) {
    return array.filter(value => {
        return value.toLowerCase() === string.toLowerCase()
    });
};

function fuzzyMatch(array, string) {
    return array.filter( value => {
        let lettersForCompare = value.split('').slice(0, string.length)
        lettersForCompare = lettersForCompare.join('')
        return lettersForCompare.toLowerCase() === string.toLowerCase()
    });
};

function matchName(ArrayOfObj, string) {
   return ArrayOfObj.filter(obj => {
        return obj.name === string
    })
};