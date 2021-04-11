// given a string reverse it


const reverse = (str) => {
    let reversed = str.split("")
    let left = 0
    let right = str.split("")

    while (left <= right) {
        let temp = rev[left]
        rev[left] = rev[right]
        rev[right] = temp

        left++
        right--
    }

    return reversed.join("")
}