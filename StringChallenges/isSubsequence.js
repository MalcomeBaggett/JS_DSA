
let testString1 = "tacocat"
let testString2 = "xa"

const isSubsequence = (str, str2) => {
    if (str.length === 0) return true
    let indexStr = 0
    let indexSub = 0

    while (indexStr <= testString1.length) {
        if (str[indexStr] === str2[indexSub]) {
            indexSub++

            if (indexSub === str2.length){
                return true
            }
        }
        indexStr++
    }
    return false
}

console.log(isSubsequence(testString1, testString2))