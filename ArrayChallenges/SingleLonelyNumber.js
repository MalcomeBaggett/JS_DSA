// In a given array of numbers, one element will show up once and the others will each show up twice. 
// Can you find the number that only appears once in O(n) linear time? Bonus points if you can do it in O(1) space as well

function lonelyNumber(numbers) {
    let seen = {}
    
    for (let el of numbers) {
        console.log
      if (seen[el]) {
        seen[el] +=1
      } else {
        seen[el] = 1
    }
    }
    console.log(seen)
    for (let el of numbers) {
        if (seen[el] === 1) {
          return el
        }
      }
}
let test =  [4, 4, 6, 1, 3, 1, 3]

console.log(lonelyNumber(test))
