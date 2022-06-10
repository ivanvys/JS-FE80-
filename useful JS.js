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

const z = "Vanya";
const x = [...z];

const arr1 = [
  { id: 1, name: "Alex", age: 10 },
  { id: 2, name: "Petr", age: 25 },
  { id: 3, name: "Alexandra", age: 29 },
  { id: 4, name: "Vahtang", age: 22 },
];

const arr2 = [
  {
    id: 1,
    pocket: 200,
  },
  {
    id: 2,
    pocket: 100,
  },
  {
    id: 3,
    pocket: 500,
  },
  {
    id: 4,
    pocket: 1000,
  },
];

const res = arr1.map((item) => {
  return {
    ...item,
    pocket: arr2.find((element) => element.id === item.id).pocket,
  };
});

const e = async () => {
  const BASE_URL_USERS = "https://jsonplaceholder.typicode.com/users";
  const BASE_URL_TODOS = "https://jsonplaceholder.typicode.com/todos";
  const dataUsers = await fetch(BASE_URL_USERS).then((result) => result.json());
  const dataToDoes = await fetch(BASE_URL_TODOS).then((result) =>
    result.json()
  );
  console.log(dataUsers);
  console.log(dataToDoes);
  const g = dataUsers.map((element) => {
    return {
      ...element,
      todoes: dataToDoes.filter((item) => {
        return item.userId === element.id;
      }),
    };
  });
  console.log(g);
};
