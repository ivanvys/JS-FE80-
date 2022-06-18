// first exercise

const pairs = [
  "red",
  "red",
  "blue",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
  "white",
];

const howManyPairs = (value) => {
  const resultCounter = {};
  value.forEach((element) => {
    if (resultCounter[element]) {
      resultCounter[element] += 1;
    } else {
      resultCounter[element] = 1;
    }
  });
  const resultPair = {};
  for (let key in resultCounter) {
    if (resultCounter[key] !== 1) {
      resultPair[key] = Math.floor(resultCounter[key] / 2);
    }
  }
  const resultPairAndColor = [];
  resultPairAndColor.push(
    Object.entries(resultPair).reduce((acc, element) => {
      acc += element[1];
      return acc;
    }, 0)
  );
  resultPairAndColor.push(
    Object.entries(resultPair).reduce((acc, element) => {
      acc.push(element);
      return acc;
    }, [])
  );
  if (resultPairAndColor[1].length > 1) {
    return `${resultPairAndColor[0]} (${resultPairAndColor[1]
      .map((element) => {
        if (element[1] > 1) {
          return `${element[1]} ${element[0]} pairs + `;
        } else {
        }
        return `${element[1]} ${element[0]} pair + `;
      })
      .join("")
      .slice(0, -3)})`;
  }
  if (resultPairAndColor[1].length === 1 && resultPairAndColor[0] === 1) {
    return `${resultPairAndColor[0]} (${resultPairAndColor[0]} ${resultPairAndColor[1][0][0]} pair)`;
  } else {
    return `${resultPairAndColor[0]} (${resultPairAndColor[0]} ${resultPairAndColor[1][0][0]} pairs)`;
  }
};

//second exercise
const translationFromRomanToArabicNumbers = (value) => {
  const romanAndArabicNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const romanAndArabicNumbersKeys = ["I", "V", "X", "L", "C", "D", "M"];
  return [...value].reduce((acc, element, index) => {
    if (
      romanAndArabicNumbersKeys.indexOf(element) >
      romanAndArabicNumbersKeys.indexOf(value[index + 1])
    ) {
      return (acc += romanAndArabicNumbers[element]);
    } else {
      return (acc -= romanAndArabicNumbers[element]);
    }
  }, 0);
};
