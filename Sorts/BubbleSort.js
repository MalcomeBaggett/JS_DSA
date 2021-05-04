function bubbleSort(array) {
	let isSorted = false;
	let counter = 0;
	
	while (!isSorted) {
		isSorted = true;
		for (let i = 0; i <= array.length - 1 - counter; i++){
			if (array[i] > array[i+1]) {
				isSorted = false;
				swap(array, i, i+1)
			}
		}
		counter++
	}
	return array
}

const swap = (arr, x, y) => {
	let temp = arr[y];
	arr[y] = arr[x];
	arr[x] = temp;
	return arr
}