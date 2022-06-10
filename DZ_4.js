const fnForExercise = async () => {
  try {
    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
    const data = await fetch(BASE_URL).then((result) => result.json());
    console.log(data);
    const pokeData = data.results.map((element) => {
      return fetch(element.url).then((result) => result.json());
    });
    const getAllPokeData = await Promise.all(pokeData);
    console.log(getAllPokeData);
    const copyGetAllPokeData = JSON.parse(JSON.stringify(getAllPokeData)); // I created this because wanted to image every steps of exercise
    const changePokeStats = copyGetAllPokeData.map(
      ({ stats, ...othersFields }) => {
        const pokeStatsToPush = {
          ...othersFields,
        };
        const changedStats = stats.reduce((acc, element) => {
          acc[element.stat.name] = element.base_stat;
          return acc;
        }, {});
        pokeStatsToPush.stats = changedStats;
        return pokeStatsToPush;
      }
    );
    console.log(changePokeStats);
  } catch (error) {}
};
