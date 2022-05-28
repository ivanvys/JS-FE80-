const y = { 1: 1, 2: 3, 3: 3, 4: 3, 5: 6, 6: 7 };

const boxArts = [
  { width: 200, height: 200, url: 1 },
  { width: 150, height: 200, url: 2 },
  { width: 300, height: 200, url: 3 },
  { width: 425, height: 150, url: 4 },
];
const theBiggestSquare = (value) => {
  return value
    .map(({ width, height, url }) => {
      return { square: width * height, url };
    })
    .reduce((acc, element) => {
      if (acc.square > element.square) {
        return acc;
      } else {
        return element;
      }
    });
};
console.log(theBiggestSquare(boxArts));

[
  { square: 40000, url: 1 },
  { square: 30000, url: 2 },
  { square: 60000, url: 3 },
  { square: 63750, url: 4 },
];

const arrayNumbers = [1, 3, 3, 6, 6, 6];

const mostFrequentItemCount = (value) => {
  let obj = {};
  value.forEach((element) => {
    obj[element] = (obj[element] || 0) + 1;
  });
  return obj;
};
//console.log(mostFrequentItemCount(arrayNumbers));

const m = { square: 63750, url: 4 };

const x = m["square"];
