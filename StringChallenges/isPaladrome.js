function isPalindrome(str) {
    let left = 0
    let right = str.length-1
    str = str.toLowerCase()
  
    while (left < right) {
      if (str[left] != str[right]) {
        return false
      }
      left++
      right--
    }  
    return true
  }