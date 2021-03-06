//A sorted array was rotated at an unknown pivot. For example, [10, 20, 30, 40, 50] becomes [30, 40, 50, 10, 20]. 
//Find the index of the minimum element in this array.

const minSortedArr = (arr) => {
    let left = 0
    let right = arr.length -1
    let boundary = -1

    while (left <= right) {
        let mid = Math.floor((left + right)/2)

        if(arr[mid] <= arr[arr.length-1] ) {
            boundary = mid
            right = mid -1
        } else {
            left = mid +1
        }
    }
    return boundary
}