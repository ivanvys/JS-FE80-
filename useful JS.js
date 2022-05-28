const array = [
  { brand: "Nike", size: 48, names: "airmax" },
  { brand: "Puma", size: 48, names: "Mupa" },
  { brand: "Nike", size: 48, names: "agugi" },
  { brand: "Adidas", size: 48, names: "agugi" },
  { brand: "Reebok", size: 48, names: "agugi" },
  { brand: "Reebok", size: 48, names: "agugi" },
];

const array2 = (value) => {
  const result = {};
  value.forEach((element) => {
    if (!result[element.brand]) {
      result[element.brand] = [element];
    } else {
      result[element.brand].push(element);
    }
  });
  return result;
};
console.log(array2(array));
const stats = [
  { title: "attack", value: 25 },
  { title: "defence", value: 30 },
];

const statsItem = {
  attack: "Icon 1",
  defence: "Icon 2",
};

const result = stats.map((element) => {
  return { ...element, icon: statsItem[element.title] };
});
console.log(result);
const user = { call: "Oleg" };

const logCity = (value) => {
  return value.address?.city;
};

const entries = Object.entries(user);
console.log(entries);
