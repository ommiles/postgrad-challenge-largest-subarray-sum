let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array){
// code to write here
// declare newArr
// loop through array
// push array elements into new array
// sum newArr
    let sum = array.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
    }, 0)
    return sum
}

largestSubarraySum(array)
// 16