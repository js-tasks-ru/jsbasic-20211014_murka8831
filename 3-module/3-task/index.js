function camelize(str) {
  let arr = str.split('-');
  let newArray = []
  newArray.push(arr[0])

  for (let i = 1; i < arr.length; i++) {
    let newString = arr[i][0].toUpperCase() + arr[i].slice(1);
    newArray.push(newString);
  }
                
  if (newArray[0] === '') {
    newArray.shift(0)
  }
  let result = newArray.join('');
  return result
}
