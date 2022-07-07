// const array = [1, 2, 10, 3, 2, 7, 3, 2];
// const theHiestPrice = (value) => {
//   const reverseArray = array.reverse();
//   let summ = reverseArray.reduce((acc, element) => acc + element);
//   const arrayOfProfit = [];
//   reverseArray.forEach((element, index) => {
//     const elementMultiply = element * (value.length - 1 - index);
//     arrayOfProfit.push(elementMultiply - (summ -= element));
//   });
//   return arrayOfProfit;
// };

// console.log(theHiestPrice(array));

// const with7 = [17, -8, -4, 17, 1, 0];

// const without7 = [-8, -4, 17, 1, 0];

const deckSteve = ["K", 4, 7, 6, "J", "A", "A"];
const deckJosh = ["J", 3, 6, 5, "J", "J", "4"];

const fn = (value1, value2) => {
  const rang = Object.fromEntries(
    ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"].map(
      (element, index) => [element, index]
    )
  );
  const value1Array = value1.map((item) => [item, rang[item]]);
  const value2Array = value2.map((item) => [item, rang[item]]);
  const arrayOfWins = [];
  for (let i = 0; i < value1Array.length; i++) {
    if (value1Array[i][1] === value2Array[i][1]) {
      arrayOfWins.push("Tie");
    } else if (value1Array[i][1] > value2Array[i][1]) {
      arrayOfWins.push("Steve");
    } else {
      arrayOfWins.push("Josh");
    }
  }
  const howMuchToWin = Object.entries(
    arrayOfWins.reduce((acc, element) => {
      if (acc[element]) {
        acc[element] += 1;
      } else {
        acc[element] = 1;
      }
      return acc;
    }, {})
  );
  const howMuchToWinadd = howMuchToWin.reduce((acc, element) => {
    if (element[0] != "Josh") {
      acc.push(["Josh", 0]);
    }
    return acc;
  }, []);
  return howMuchToWinadd;
  const theMostWinner = howMuchToWin.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < theMostWinner.length; i++) {
    if (theMostWinner[i][0] != "Tie" && theMostWinner[i + 1][0] != "Tie") {
      return `${theMostWinner[i][0]} wins ${theMostWinner[i][1]} to ${
        theMostWinner[i + 1][1]
      }`;
    } else if (theMostWinner[i][0] === "Tie") {
      return `${theMostWinner[i + 1][0]} wins ${theMostWinner[i + 1][1]} to ${
        theMostWinner[theMostWinner.length - 1][1]
      }`;
    } else if (theMostWinner[i + 1][0] === "Tie") {
      return `${theMostWinner[i][0]} wins ${theMostWinner[i][1]} to ${
        theMostWinner[theMostWinner.length - 1][1]
      }`;
    }
  }
};

console.log(fn(deckSteve, deckJosh));
