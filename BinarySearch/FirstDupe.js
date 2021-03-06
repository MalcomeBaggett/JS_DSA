//Given a sorted array of integers and a target integer, 
//find the first occurrence of the target and return its index. Return -1 if the target is not in the array.

const findFirst = (arr, target) => {
    let left = 0
    let right = arr.length-1
    let first = -1
    
    while (left <= right) {
        let mid = Math.floor((left + right) /2)
        
        if (arr[mid] === target) {
            first = mid
            right = mid - 1
        } if (arr[mid] < target) {
            mid = left +1  
        }

        else {
            right = mid -1
        }
    }
    return first
}