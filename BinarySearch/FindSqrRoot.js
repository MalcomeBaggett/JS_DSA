//Given an integer, find its square root without using built-in square root function. 
//Only return the integer part (truncate the decimals).

const squareRoot = (num) => {
    let left = 0;
    let right = num
    let root = -1

    while (left <= right) {
        let mid = Math.floor((left + right)/2) 

        if(mid * mid >= num) {
            root = mid
            right = mid -1
        } else {
            left = mid +1
        }
    }
    if (root * root > num) {
        return root - 1
    }

    return root
}