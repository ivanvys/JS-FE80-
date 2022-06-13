const r = [1, 2, 3, 4, 5, 6];
const y = (value) => {
  const p = [];
  const e = value.reduce((acc, element) => {
    acc += element;
    return acc;
  }, 0);
  p.push(e);
  value.reduce((acc, element) => {
    acc = acc - element;
    p.push(acc);
    return acc;
  }, e);
  return p;
};

console.log(y(r));
