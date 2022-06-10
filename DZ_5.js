const agrigateUsersToDos = async () => {
  const BASE_URL_USERS = "https://jsonplaceholder.typicode.com/users";
  const BASE_URL_TODOS = "https://jsonplaceholder.typicode.com/todos";
  const dataUsers = await fetch(BASE_URL_USERS).then((result) => result.json());
  const dataToDoes = await fetch(BASE_URL_TODOS).then((result) =>
    result.json()
  );
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
