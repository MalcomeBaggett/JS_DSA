// We're given an array of continuous numbers that should increment sequentially by 1, which just means that we expect a sequence like:
// [1, 2, 3, 4, 5, 6, 7]
// However, we notice that there are some missing numbers in the sequence.
// [1, 2, 4, 5, 7]


let testArr = [1,6,8]

const findMissing = (arr) => {
    
    let missing = []

    for (let i = 1; i < arr.length; i++) {
        let x = arr[i] - arr[i-1]
        let diff = 1

        while (diff < x) {
             missing.push(arr[i-1] + diff)
             diff++
        }
    }
    return missing
}


console.log(findMissing(testArr))

