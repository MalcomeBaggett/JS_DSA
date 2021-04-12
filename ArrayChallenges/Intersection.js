const intersection = (arr1, arr2) => {
    let retArr = []

    let map = {}

    for (let ele of arr1) {
        map[ele] = ele
    }

    for (let ele of arr2) {
        if (map[ele] && retArr.includes(ele) === false) {
            retArr.push(ele)
        }
    }

    console.log(retArr)
}

