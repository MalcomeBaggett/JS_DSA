// A mountain array is defined as an array that
// has at least 3 elements
// let's call the element with the largest value the "peak", 
// with index k. The array elements monotonically increase from the first element to A[k], 
// and then monotonically decreases from A[k + 1] to the last element of the array. Thus creating a "mountain" of numbers.
// Find the index of the peak element. Assume there is no duplicate.

function peak_of_mountain_array(arr) {
    // WRITE YOUR BRILLIANT CODE HERE
    let left = 0
    let right = arr.length - 1
    let peak = -1
    
    while (left <= right) {
        let mid = Math.floor((left + right)/2)
        
        if (mid === arr.length -1 || arr[mid] >= arr[mid+1]) {
                peak = mid
                right = mid -1
            } else {
                left = mid +1
        }
    }
    return peak
}