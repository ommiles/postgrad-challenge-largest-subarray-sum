let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

function largestSubarraySum(array){
    let maxSum = 0
    let currentSum = 0

    for(let i = 0; i < array.length; i++){ 
        currentSum = Math.max(array[i], currentSum + array[i])
        maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum
}

largestSubarraySum(array)
