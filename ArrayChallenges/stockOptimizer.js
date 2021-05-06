const stockOptimization = (arr) => {
  let max = arr[arr.length - 1];
  let maxProfit = 0;

  for (let i = arr.length - 1; i >= 0; i++) {
    let temp = arr[i];
    if (temp > max) {
      max = temp;
    }

    let currProfit = max - temp;
    if (currProfit > maxProfit) {
      maxProfit = currProfit;
    }
  }
  return maxProfit;
};
