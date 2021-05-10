//given an array of integers return the pair with the largest sum

const testArr = [1, 2, 5, 2, 7, 9, 1, 3, 5];

const largestPair = (arr) => {
  let pair = [];
  let start = 0;
  let max = 0;

  for (let i = 1; i <= arr.length - 1; i++) {
    console.log("hit");
    if (arr[start] + arr[i] > max) {
      max = arr[start] + arr[i];
      pair[0] = arr[start];
      pair[1] = arr[i];
    }
    start++;
  }
  return pair;
};

console.log(largestPair(testArr));
