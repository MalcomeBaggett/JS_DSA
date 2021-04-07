const swap = (arr, a, b) => {
    let temp = a
    arr[a] = arr[b]
    arr[b] = arr[temp]

    return arr
}

const bubbleSort = (arr) => {
    let isSorted = false

    while(!isSorted) {
        isSorted = true
        for (let i = 0;i <= arr.length - 2; i++) {
            if (arr[i] > arr[i+1]) {
                swap(arr, i, i+1)
                isSorted = false
            }
        }
    }
    return arr
}