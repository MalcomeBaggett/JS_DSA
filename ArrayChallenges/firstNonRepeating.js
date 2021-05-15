const testArr = [1, 1, 1, 2, 3, 3, 5, 5, 5, 10, 1];

const firstNonRepeating = (arr) => {
  const map = {};

  arr.forEach((el) => {
    if (map[el]) map[el]++;
    else {
      map[el] = 1;
    }
  });
  console.log(map);

  for (let i = 0; i <= arr.length - 1; i++) {
    if (map[arr[i]] === 1) {
      return arr[i];
    }
  }
  return false;
};

console.log(firstNonRepeating(testArr));
