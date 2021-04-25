// var list1 = [
//     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
//   ]


// let list2 = list1.map((el) => {
//     return {...el, "new": 1}
// })

// console.log(list2)


const testArr = [1,2,3,4,5,6,7,8,9,10,11,20,50,100,101,125,500]

const binarySearch = (arr, target) => {
    let left = 0
    let right = arr.length-1
    

    while (left <= right) {
     
        let mid = Math.floor((left+right)/2)
        if (arr[mid] === target) return arr[mid]
        if (arr[mid] < target) {
            left = mid+1
        }
        else {
            right = mid -1
        }
    }
    return -1
}


console.log(binarySearch(testArr, 100))