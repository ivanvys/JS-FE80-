const numbers = [1, 2, 3, 4, 5, 5];

const sum = (numberList) => {
  let result = 0;
  for (const i = 0; i < numberList.length; i++) {
    result += numberList[i];
  }
  return result;
};
console.log(sum(numbers));
