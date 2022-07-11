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

const summ = (a) => (b) => console.log(a + b); //каррирование

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

function minimumNumber(numbers) {
  const sum = numbers.reduce((res, num) => res + num);

  if (sum === 0) return sum + 2;
  if (sum === 1) return sum + 1;

  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false; // функция в функции
    }
    return true;
  }

  if (isPrime(sum) === true) return 0;

  let j = 1;
  while (j < 1000) {
    if (isPrime(sum + j) === true) break;
    j += 1;
  }
  return j;
}

const whoIsFaster = (value1, value2) => {
  const firstPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("You win!");
    }, value1);
  });
  const secondPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("You lost!");
    }, value2);
  });
  Promise.race([firstPromise, secondPromise]).then((data) => console.log(data)); //таймауты (что быстрее) (c thenами)
};

// OR

const whoIsFasterasync = async (value1, value2) => {
  const firstPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("You win!");
    }, value1);
  });
  const secondPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("You lost!");
    }, value2);
  });
  console.log(await Promise.race([firstPromise, secondPromise])); //таймауты (что быстрее) (без then)
};

const fn = () =>
  new Promise((resolve) => setTimeout(() => resolve("Good"), 1000)); // задачка с занятия

const fn2 = (delay) =>
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Wrong!")), delay)
  );

const fn3 = async (reqest, delay) => {
  try {
    const result = await Promise.race([reqest(), fn2(delay)]);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

const PeriodDateRangeDictionary = {
  yesterday: ["06/07/2022", "07/07/2022"],
  lastWeek: ["27/06/2022", "03/07/2022"],
  lastMonth: ["01/06/2022", "30/06/2022"],
};

const result1 = {
  "06-07-2022_07-07-2022": "yesterday",
  "27-06-2022_07-07-2022": "lastWeek",
};

const fn1 = (value) => {
  const array = Object.entries(value);
  return array.reduce((acc, [numberOfCalendar, data]) => {
    const tire = `${data[0]}_${data[1]}`.replaceAll("/", "-"); ///метод с шаблонным строкам (задача по датам)
    acc[tire] = numberOfCalendar;
    return acc;
  }, {});
};

const fnPoke = () => {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
  fetch(BASE_URL)
    .then((data) => data.json())
    .then((data) => {
      return data.results.map(({ url }) => {
        return fetch(url).then((data) => data.json());
      });
    })
    .then((data) => {
      return Promise.all(data);
    })
    .then((data) => {
      return data.map(({ stats, ...othersFiels }) => {
        return {
          ...othersFiels,
          stats: stats.reduce((acc, element) => {
            acc[element.stat.name] = element.base_stat;
            return acc;
          }, {}),
        };
      });
    })
    .then((data) => console.log(data)); //Покемоны на thenах!!!!
};
