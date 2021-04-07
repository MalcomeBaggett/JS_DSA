export const hash = (key, bucketNumber) => {
    let hashCode = 0
    for (let charIndex = 0; charIndex < key.length; charIndex +=1) {
        hashCode += key.charCodeAt(charIndex)
    }
    return hashCode
}

