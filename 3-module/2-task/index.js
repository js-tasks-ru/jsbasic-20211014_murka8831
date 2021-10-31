function filterRange(arr, a, b) {
  if (a < b) {
    let comparisonResult = arr.filter (item => (a <= item && item <= b));
    return comparisonResult
  } else {
        let comparisonResult = arr.filter (item => (a >= item && item >= b));
        return comparisonResult
    }
}

