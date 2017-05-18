function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    const temp = array[i];
    console.log("temp " + temp)
    let j = i - 1;

    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--
    }
    array[j + 1] = temp;
    console.log(temp)
  }
  return array;
}

export default insertionSort;
