const getFn = async () => {
  try {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    const data = await fetch(BASE_URL).then((result) => result.json());
    console.log(data);
    const pokeData = data.results.reduce((acc, element) => {
      acc.push(fetch(element.url).then((result) => result.json()));
      return acc;
    }, []);
    const getAllPokeData = await Promise.all(pokeData);
    console.log(getAllPokeData);
    const copyGetAllPokeData = JSON.parse(JSON.stringify(getAllPokeData)); // I created this because wanted to image every steps of exercise
    const changePokeStats = copyGetAllPokeData.reduce(
      (acc, { stats, ...othersFields }) => {
        const pokeStatsToPush = {
          ...othersFields,
        };
        const changedStats = stats.reduce((acc, element) => {
          acc[element.stat.name] = element.base_stat;
          return acc;
        }, {});
        pokeStatsToPush.stats = changedStats;
        acc.push(pokeStatsToPush);
        return acc;
      },
      []
    );
    console.log(changePokeStats);
  } catch (error) {}
};
getFn();
