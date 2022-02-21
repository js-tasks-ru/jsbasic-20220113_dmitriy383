function filterRange(arr, a, b) {

  let array = [];
  return arr.filter(item => (a <= item && item <= b));
}
