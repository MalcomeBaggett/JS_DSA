// Given an array of integers return the first duplicate integer
// if no duplicate integer exists return -1

function firstDuplicateValue(arr) {
      let seen = {}
      
      for(let el of arr){
          if (seen[el]) {
              return el
          }
          else {
              seen[el] = true
          }
      }
      return -1
  }