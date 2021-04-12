const fizzBuzz = (n) => {
    let finalArr = [];
  
    for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) {
        finalArr.push("fizzbuzz")
      } else if (i % 3 === 0) {
        finalArr.push("fizz")
      } else if (i % 5 === 0) {
        finalArr.push("buzz")
      } else {
        finalArr.push(i.toString())
      }
    }
  
    return finalArr.join("")
  }