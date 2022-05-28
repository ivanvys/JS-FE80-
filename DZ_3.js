//first exercise

const newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
  },
  {
    id: 654356453,
    title: "Bad Boys",
  },
  {
    id: 65432445,
    title: "The Chamber",
  },
  {
    id: 675465,
    title: "Fracture",
  },
];

const getIdAndTitle = (value) => {
  const total = {};
  value.forEach(({ id, title }) => {
    total[id] = title;
  });
  return total;
};

//second exercise

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

//third exercise

const arrayNumbers = [1, 3, 3, 6, 6, 6];

const mostFrequentItemCount = (value) => {
  let obj = {};
  value.forEach((element) => {
    obj[element] = (obj[element] || 0) + 1;
  });
  const maxValue = Math.max.apply(null, Object.values(obj));
  return Object.keys(obj)
    .filter((element) => obj[element] === maxValue)
    .join("");
};
console.log(mostFrequentItemCount(arrayNumbers));

//fourth exercise

const notUndefinedAndNull = {
  a: undefined,
  b: null,
  c: "Привет",
  d: 1,
};

const withoutUndefinedAndNull = (value) => {
  return Object.fromEntries(
    Object.entries(value).filter((element) => {
      return !element.includes(undefined) && !element.includes(null);
    })
  );
};

//fifth exercise

const minFrequentItemCount = (value) => {
  let obj = {};
  value.forEach((item) => {
    obj[item] = (obj[item] || 0) + 1;
  });
  const maxValue = Math.min.apply(null, Object.values(obj));
  return Object.keys(obj)
    .filter((element) => obj[element] === maxValue)
    .join("");
};

//sixth exercise

const getWord = (value, number) =>
  value.split("").slice(0, number).join("") + "...";

//seventh exercise
