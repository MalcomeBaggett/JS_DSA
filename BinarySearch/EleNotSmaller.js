//Given an array of integers sorted in increasing order and a target, find the index of the first element 
//in the array that is larger than or equal to the target. Assume that it is guaranteed to find a satisfying number.

const EleNotSmaller = (arr) => {
    let left = 0
    let right = arr.length - 1
    let first = -1
    
    while (left <= right) {
        let mid = Math.floor((left + right)/2)
        
        if (arr[mid] >= target) {
            first = mid
            right = mid -1
        } else {
            left = mid + 1
        }       
    }
    return first
}