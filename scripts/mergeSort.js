

const mergeSort = (a) => {
  if (a.length <= 1) {
    return a;
  }
  let mid = Math.round((a.length / 2));
  let left = a.slice(0, mid);
  let right = a.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  let sorted = [];

  while (left && left.length > 0 && right && right.length > 0) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return sorted.concat(left, right);
}

export default mergeSort;
