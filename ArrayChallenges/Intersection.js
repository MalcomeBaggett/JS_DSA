let test1 = [1,2,3,4,5,6]
let test2 = [5,6]
const intersection = (arr1, arr2) => {
    let retArr = []

    let map = {}

    for (let ele of arr1) {
        map[ele] = ele
    }
    

    for (let ele of arr2) {
        if (map[`${ele}`] && retArr.includes(ele) === false) {
            retArr.push(ele)
        }
    }

    return retArr
}


console.log(intersection(test1, test2))