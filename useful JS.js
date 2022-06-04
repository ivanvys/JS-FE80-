const array = [
  { brand: "Nike", size: 48, names: "airmax" },
  { brand: "Puma", size: 48, names: "Mupa" },
  { brand: "Nike", size: 48, names: "agugi" },
  { brand: "Adidas", size: 48, names: "agugi" },
  { brand: "Reebok", size: 48, names: "agugi" },
  { brand: "Reebok", size: 48, names: "agugi" },
];

const array2 = (value) => {
  return value.reduce((acc, element) => {
    if (!acc[element.brand]) {
      acc[element.brand] = [element];
    } else {
      acc[element.brand].push(element);
    }
    return acc;
  }, {});
};

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

const user = { call: "Oleg" };

const logCity = (value) => {
  return value.address?.city;
};

//promises

const fnDelay = async () => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
  setTimeout(() => {
    reject("Упс");
  }, 1000);
};

const data = [
  {
    id: 1,
    value: 2,
  },
  {
    id: 1,
    value: 42,
  },
  {
    id: 1,
    value: 32,
  },
  {
    id: 1,
    value: 222,
  },
  {
    id: 1,
    value: 12,
  },
];
const q = (value) => {
  return value.reduce((acc, element) => {
    return acc + element.value;
  }, 0);
};
