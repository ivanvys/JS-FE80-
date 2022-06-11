const y = undefined;
const g = (value) => {
  const e = [...value];
  const q = e
    .reduce((acc, element) => {
      if (!acc.includes(element)) {
        acc.push(element);
      }
      return acc;
    }, [])
    .join("");
  return value.toLowerCase() === q.toLowerCase() ||
    value.toLowerCase() === undefined
    ? "true"
    : "false";
};
console.log(g(y));
