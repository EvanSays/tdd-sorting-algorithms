// Takes in an array and recursively merge sorts it
function mergeSort(array, p, r) {
  if (p < r) {
    const q = Math.floor((r + p) / 2);

    mergeSort(array, p, q);
    mergeSort(array, q + 1, r);
    merge(array, p, q, r);
  }
  return array
}

// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
function merge(array, p, q, r) {
  const lowHalf = [];
  const highHalf = [];

  let k = p;
  let i;
  let j;

  for (i = 0; k <= q; i++, k++) {
    lowHalf[i] = array[k];
  }
  for (j = 0; k <= r; j++, k++) {
    highHalf[j] = array[k];
  }

  k = p;
  i = 0;
  j = 0;

  while (i < lowHalf.length && j < highHalf.length) {

    if (lowHalf[i] < highHalf[j]) {
      array[k] = lowHalf[i];
      i++;
    } else {
      array[k] = highHalf[j];
      j++;
    }
    k++;
  }
  while (i < lowHalf.length) {
    array[k] = lowHalf[i];
    i++;
    k++;
  }
  while (j < highHalf.length) {
    array[k] = highHalf[j];
    j++;
    k++;
  }
}

export default mergeSort;

// var array = [100,50,2,5,9,40,33,22,12]
// mergeSort(array, 0, array.length - 1)
