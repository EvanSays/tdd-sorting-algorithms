

const mergeSort = (a) => {
  if (a.length <= 1) {
    return a;
  }
  let mid = Math.round((a.length / 2));
  let left = a.slice(0, mid);
  let right = a.slice(mid);

  //console.log(left, right);
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  let sorted = [];

  //console.log(sorted, left, right, left[0], right[0]);
  while (left && left.length > 0 && right && right.length > 0) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
      //console.log("left", left, right);
    } else {
      sorted.push(right.shift());
      //console.log("left", left, right);
    }
  }
  return sorted.concat(left, right);
}

export default mergeSort;
