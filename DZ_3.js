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
  return value.reduce((acc, element) => {
    acc[element.id] = element.id;
    return acc;
  }, {});
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
      return element.square > acc.square ? element : acc;
    }).url;
};

//////OR

const boxArts2 = [
  { width: 200, height: 200, url: 1 },
  { width: 150, height: 200, url: 2 },
  { width: 300, height: 200, url: 3 },
  { width: 425, height: 150, url: 4 },
];
const MaxSquare = (value) => {
  const { url } = value.reduce((acc, element) => {
    const accSquare = acc.width * acc.height;
    const elementSquare = element.width * element.height;
    return accSquare > elementSquare ? acc : element;
  });
  return url;
};

//third exercise

const arrayNumbers = [2, 3, 3, 6, 6, 6];

const mostFrequentItemCount = (value) => {
  const obj = {};
  value.forEach((element) => {
    obj[element] = (obj[element] || 0) + 1;
  });
  const maxValue = Math.max.apply(null, Object.values(obj));
  return Object.keys(obj).filter((element) => obj[element] === maxValue)[0];
};

////OR
const FrequentItem = (item) => {
  const result = {};
  item.forEach((element) => {
    if (result[element]) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  });
  const [key] = Object.entries(result).reduce((acc, element) => {
    return acc[1] > element[1] ? acc : element;
  });
  return key;
};

//fourth exercise

const notUndefinedAndNull = {
  a: undefined,
  b: null,
  c: "Привет",
  d: 1,
  e: false,
};

const withoutUndefinedAndNull = (value) => {
  const result = {};
  for (const key in value) {
    if (value[key] !== null && value[key] !== undefined) {
      result[key] = value[key];
    }
  }
  return result;
};

////OR

const withoutUndefinedAndNull2 = (value) => {
  return Object.fromEntries(
    Object.entries(value).filter((element) => {
      return !element.includes(undefined) && !element.includes(null);
    })
  );
};

//fifth exercise

const minFrequentItemCount = (value) => {
  const number = value.reduce((acc, element) => {
    if (acc[element]) {
      acc[element] += 1;
    } else {
      acc[element] = 1;
    }
    return acc;
  }, {});
  for (const key in number) {
    if (number[key] === 1) {
      return key;
    }
  }
};

//sixth exercise

const getWord = (value, number) => {
  if (value.length <= number) return value;
  return `${value.slice(0, number)}...`;
};

//seventh exercise

const someFn = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(1));
    }, 1000);
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(2));
    }, 5000);
  });
};
