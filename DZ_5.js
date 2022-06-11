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
  const dataUsers = await call_BASE_URL_USERS;
  const dataToDoes = await call_BASE_URL_TODOS;
  console.log(dataUsers);
  console.log(dataToDoes);
  const newArrayOfDataUsers = dataUsers.map((element) => {
    return {
      ...element,
      todoes: dataToDoes.filter((item) => {
        return item.userId === element.id;
      }),
    };
  });
  console.log(newArrayOfDataUsers);
};

//without cycle
const aggregateUsersToDosWithoutCycle = async () => {
  const dataUsers = await call_BASE_URL_USERS;
  const dataToDoes = await call_BASE_URL_TODOS;
  console.log(dataUsers);
  console.log(dataToDoes);
  const newArrayOfDataToDoes = dataToDoes.reduce((acc, element) => {
    if (!acc[element.userId]) {
      acc[element.userId] = [element];
    } else {
      acc[element.userId].push(element);
    }
    return acc;
  }, {});
  const newArrayOfDataUsers = dataUsers.map((element) => {
    const obj = {
      ...element,
      toDos: newArrayOfDataToDoes[element.id],
    };
    return obj;
  });
  console.log(newArrayOfDataUsers);
};
aggregateUsersToDosWithoutCycle();
