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

class PokeApi {
  BASE_URL = "https://pokeapi.co/api/v2/pokemon";

  async getPokemonsDetailsWithConvertedStats() {
    try {
      const pokemons = await this.getPokemons();

      const pokemonDetails = await this.getPokemonDetails(pokemons);

      return pokemonDetails.map((pokemon) => ({
        ...pokemon,
        stats: this.statsConverter(pokemon.stats),
      }));
    } catch (error) {
      console.log(error.message);
    }
  }

  async getPokemons() {
    const { results } = await fetch(this.BASE_URL).then((response) =>
      response.json()
    );

    return results;
  }

  async getPokemonDetails(pokemons) {
    const pokemonDetailsCalls = pokemons.map(({ url }) =>
      fetch(url).then((response) => response.json())
    );

    return Promise.all(pokemonDetailsCalls);
  }

  statsConverter(pokemonDetailedList) {
    return pokemonDetailedList.reduce((statMap, { base_stat, stat }) => {
      statMap[stat.name] = base_stat;

      return statMap;
    }, {});
  }
}

const api = new PokeApi();

((a, b) => {
  // console.log(a + b);
})(5, 5); // самовызывающаяся функция

const dummyData = [
  [
    {
      ip: "139.12.13",
      value: 25,
    },
    {
      ip: "139.12.134",
      value: 12,
    },
    {
      ip: "139.12.22",
      value: 10,
    },
  ],
  [
    {
      ip: "144.12.13",
      value: 3,
    },
    {
      ip: "1467.12.22",
      value: 11,
    },
  ],
];

// [{ip: 139.12.22', total: 47 }, {ip: '1467.12.22', total: 14}]

const ipFn = (value) => {
  return value.reduce((acc, element) => {
    let counter = 0;
    const obj = element.reduce((acc, item) => {
      const lastIndex = element[element.length - 1];
      acc.ip = lastIndex.ip;
      acc.total = counter += item.value;
      return acc;
    }, {});
    acc.push(obj);
    return acc;
  }, []);
};

//OR
const someFn = (value) => {
  return value.map((element) => {
    const theLastIndex = element.length - 1;
    const summ = element.reduce((acc, item) => {
      acc += item.value;
      return acc;
    }, 0);
    return { ip: element[theLastIndex].ip, total: summ };
  });
};

const arrayOfArrays = [[1, 2, 3, 4], [2, 2, 2, 5, 6, 10], [1]];

const theHiestArray = (value) => {
  return value.reduce((acc, element) => {
    const summElement = element.reduce((result, item) => result + item);
    return acc > summElement ? acc : summElement; //найти самое большое/маленькое число
  });
};

const summ = (a) => (b) => console.log(a + b); //рекурсия

const numbers = [2, 3, 5, 3, 7, 9, 5, 3, 7];
const Fn = (value) => {
  const objNumbers = value.reduce((acc, element) => {
    if (acc[element]) {
      acc[element] += 1;
    } else {
      acc[element] = 1;
    }
    return acc;
  }, {});
  const arrayOfNumbers = Object.entries(objNumbers).sort(
    (firstElement, secondElement) => {
      return secondElement[1] - firstElement[1];
    }
  );
  const toFillArray = arrayOfNumbers.map((item) => {
    const number = Number(item[0]);
    return Array(item[1]).fill(number); //вывести число указанное число раз (как делал задачу на кодварсе)
  });
  return toFillArray.flat();
};
