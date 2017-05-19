const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) { //i<length -  i=1 - index
    const temp = array[i];
    let j = i - 1; // j = 0

    while (j >= 0 && array[j] > temp) { // is j > temp
      array[j + 1] = array[j]; // copy j over

      j--
    }
    array[j + 1] = temp; //move j back and store temp
  }
  return array;
}

export default insertionSort;
