const input = ["red", "green", "red", "blue", "blue", "green"];

const g = (value) => {
  const b = value.reduce((acc, element) => {
    if (acc[element]) {
      acc[element] += 1;
    } else {
      acc[element] = 1;
    }
    return acc;
  }, {});
  const v = {};
  for (key in b) {
    if (b[key] % 2 === 0) {
      v[key] = b[key] / 2;
    }
  }
  const a = {};
  const z = Object.entries(v).reduce((acc, element) => {
    return acc + element[1];
  }, 0);
  a[z] = "Привет";
  return a;
};
console.log(g(input));
