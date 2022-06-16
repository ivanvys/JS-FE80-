//common parameteres
const BASE_URL_USERS = "https://jsonplaceholder.typicode.com/users";
const BASE_URL_TODOS = "https://jsonplaceholder.typicode.com/todos";
const call_BASE_URL_USERS = fetch(BASE_URL_USERS).then((result) =>
  result.json()
);
const call_BASE_URL_TODOS = fetch(BASE_URL_TODOS).then((result) =>
  result.json()
);

//with cycle
const aggregateUsersToDos = async () => {
  const [dataUsers, dataToDoes] = await Promise.all([
    call_BASE_URL_USERS,
    call_BASE_URL_TODOS,
  ]);
  console.log(dataUsers);
  console.log(dataToDoes);
  const newArrayOfDataUsers = dataUsers.map((element) => ({
    ...element,
    todoes: dataToDoes.filter((item) => item.userId === element.id),
  }));
  console.log(newArrayOfDataUsers);
};

//without cycle
const aggregateUsersToDosWithoutCycle = async () => {
  const [dataUsers, dataToDoes] = await Promise.all([
    call_BASE_URL_USERS,
    call_BASE_URL_TODOS,
  ]);
  console.log(dataUsers);
  console.log(dataToDoes);
  const userIdTodosMap = dataToDoes.reduce((acc, element) => {
    if (!acc[element.userId]) {
      acc[element.userId] = [element];
    } else {
      acc[element.userId].push(element);
    }
    return acc;
  }, {});
  const newArrayOfDataUsers = dataUsers.map((user) => ({
    ...user,
    todos: userIdTodosMap[user.id],
  }));
  console.log(newArrayOfDataUsers);
};

// customMap
Array.prototype.customMap = function (callback) {
  const arrayToReturn = [];

  for (let i = 0; i < this.length; i++) {
    arrayToReturn.push(callback(this[i], i, this));
  }
  return arrayToReturn;
};

//customFilter
Array.prototype.customFilter = function (callback) {
  const arrayToReturn = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arrayToReturn.push(this[i]);
    }
  }
  return arrayToReturn;
};
