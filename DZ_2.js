//first exercise

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayNumbers2 = (value) => {
  return value.map((element) => {
    const isEven = element % 2 === 0;
    return isEven ? element + 1 : element - 1;
  });
};

//second exercise

const arrayLetters = ["HELLO", "WoRld", "LolKek"];
const arrayLetters2 = (value) => {
  return value.map(
    (letters) => letters[0].toUpperCase() + letters.slice(1).toLowerCase()
  );
};

//third exercise

const users = [
  {
    id: 1,
    usersName: "Petr",
  },
  {
    id: 2,
    usersName: "Tamara",
  },
  {
    id: 3,
    usersName: "Sveta",
  },
];

const removeUsers = (value, id) => {
  return value.filter((element) => !id.includes(element.id));
};

//fourth exercise

const palindrome = "шалаш";
const isPalindrome = (someString) => {
  return (
    someString.toLowerCase() ===
    someString.split("").reverse().join("").toLowerCase()
  );
};

//fifth exercise

const users2 = [
  {
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "Female",
    ip_address: "26.58.193.2",
  },
  {
    id: 2,
    first_name: "Petr",
    last_name: "Jackson",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    ip_address: "229.179.4.212",
  },
];

const filterUsersByGender = (users) => {
  return users.reduce(
    (accumulator, { first_name, last_name, ...othersFields }) => {
      const userToPush = {
        full_name: `${first_name} ${last_name}`,
        ...othersFields,
      };
      if (userToPush.gender === "Male") {
        accumulator.men.push(userToPush);
      } else {
        accumulator.women.push(userToPush);
      }
      return accumulator;
    },
    { men: [], women: [] }
  );
};

//sixth exercise

const newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "https...",
    url: "https...",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "https...",
    url: "https...",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "https...",
    url: "https...",
    rating: [5.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "https...",
    url: "https...",
    rating: [4.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

const fnForNewReleases = (value) => {
  return value.map(({ id, title }) => ({ id, title }));
};

///seventh exercise

const fnRating = (value) => {
  return value.reduce((acc, element) => {
    if (element.rating[0] === 5) {
      acc.push(element.id);
    }
    return acc;
  }, []);
};
