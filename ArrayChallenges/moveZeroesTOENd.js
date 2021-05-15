const testArr = [1, 1, 0, 1, 0, 1, 1, 2, 0];

const moveZero = (arr) => {
  let count = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }

  for (let i = count; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
};

console.log(moveZero(testArr));
