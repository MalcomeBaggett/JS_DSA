const linkedList = require('../LinkedList/LinkedList')
const defaultBucket = 32
class HashTable {
    constructor(bucketNumber = defaultBucketsNumber ) {
        this.buckets = Array(bucketsNumber).fill(null).map()
    }

    Hash(key) {
        let hashCode = 0
        for (let charIndex = 0; charIndex < key.length; charIndex +=1) {
            hashCode += key.charCodeAt(charIndex)
        }
        return hashCode % this.buckets.lengt
    }
}

const ll = new linkedList.LinkedList()

