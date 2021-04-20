let string1 = "jay"
let string2 = "jake"

const isAnagram = (str1, str2) => {
    let freq = {}
    let freq2 = {}
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    if (str2.length != str1.length) return false

    for (let el of str1) {
        if (freq[el]) {
            freq[el] += 1
        }
        else {
            freq[el] = 1
        }
    }

    for (let el of str2) {
        if (freq2[el]) {
            freq2[el] += 1
        }
        else {
            freq2[el] = 1
        }
    }

    for (let el of str1) {
        if(freq[el] != freq2[el]) return false
    }

    return true
}

console.log(isAnagram(string1, string2))