function getMinMax(str) {
  
  let newString = str.split(' ');
  let newArray = [];

  for (let i = 0; i < newString.length; i++) {
    if (isFinite(newString[i])) {
      newArray.push(+newString[i]);
    }
  };

  let result = {
     min: Math.min(...newArray),
     max: Math.max(...newArray),
  };

  return result;
}
