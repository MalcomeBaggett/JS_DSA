var list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ]


let list2 = list1.map((el) => {
    return {...el, "new": 1}
})

console.log(list2)