const fnDelay = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
  setTimeout(() => {
    reject("Упс");
  }, 1000);
});

/*fnDelay.then(
  (result) => console.log(result), //если resolve
  (error) => console.log(error) //если reject
);*/

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
      if (acc.square === Math.max(Object.entries(element))) {
        acc.push(element.url);
      }
      return acc;
    }, []);
};

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

someFn();
