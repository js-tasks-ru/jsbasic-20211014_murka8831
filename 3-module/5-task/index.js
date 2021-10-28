function getMinMax(str) {
  let newString = inputData.split(' ')
  let newArray = []

  for (let i = 0; i < newString.length; i++) {
    if (isFinite(newString[i])) {
      newArray.push(+newString[i])
    }
  }

  let result = {
     min: Math.min(...newArray),
     max: Math.max(...newArray),
  };

  return result;
}

// let inputData = '25 : -1 / -234 - 4 = 1000';

// console.log(getMinMax(inputData));

// { min: -5.8, max: 73 }

// {min: -5.8, max: 73}