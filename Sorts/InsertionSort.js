function insertionSort(array) {
      for (let i = 1; i <= array.length-1; i++) {
          let j = i;
          while (j > 0 && array[j] < array[j-1]) {
              swap(array, j, j-1);
              j-=1
          }
      }
      return array
  }
  const swap = (arr, x, y) => {
      let temp = arr[y];
      arr[y] = arr[x];
      arr[x] = temp;
      return arr
  }