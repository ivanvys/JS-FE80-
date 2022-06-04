const g = [
  {
    abilities: [{ ability: { name: "vasya", url: 1 } }, { is_hidden: false }],
    stats: [
      { base_stat: 45, stat: { name: "hp" } },
      { base_stat: 46, stat: { name: "attack" } },
      { base_stat: 70, stat: { name: "defense" } },
      { base_stat: 80, stat: { name: "first_attack" } },
      { base_stat: 90, stat: { name: "second_attack" } },
      { base_stat: 80, stat: { name: "third_attack" } },
    ],
    weight: 69,
  },
  {
    abilities: [{ ability: { name: "petya", url: 1 } }, { is_hidden: false }],
    stats: [
      { base_stat: 45, stat: { name: "hp" } },
      { base_stat: 46, stat: { name: "attack" } },
      { base_stat: 70, stat: { name: "defense" } },
      { base_stat: 80, stat: { name: "first_attack" } },
      { base_stat: 90, stat: { name: "second_attack" } },
      { base_stat: 80, stat: { name: "third_attack" } },
    ],
    weight: 69,
  },
];

const b = (value) => {
  return value.reduce((acc, { stats, ...others }) => {
    const zx = {
      ...others,
    };
    const df = stats.reduce((acc, element) => {
      acc[element.stat.name] = element.base_stat;
      return acc;
    }, {});
    acc.push(zx, df);
    return acc;
  }, []);
};
console.log(b(g));

const s = [
  { base_stat: 45, stat: { name: "hp" } },
  { base_stat: 46, stat: { name: "attack" } },
  { base_stat: 70, stat: { name: "defense" } },
  { base_stat: 80, stat: { name: "first_attack" } },
  { base_stat: 90, stat: { name: "second_attack" } },
  { base_stat: 80, stat: { name: "third_attack" } },
];

const array = (value) => {
  return value.reduce((acc, element) => {
    acc[element.stat.name] = element.base_stat;
    return acc;
  }, {});
};
//console.log(array(s));

const c = {
  stats: [
    { base_stat: 45, stat: { name: "hp" } },
    { base_stat: 46, stat: { name: "attack" } },
    { base_stat: 70, stat: { name: "defense" } },
    { base_stat: 80, stat: { name: "first_attack" } },
    { base_stat: 90, stat: { name: "second_attack" } },
    { base_stat: 80, stat: { name: "third_attack" } },
  ],
};

const zx = (value) => {
  return value.stats.reduce((acc, element) => {
    acc[element.stat.name] = element.base_stat;
    return acc;
  }, {});
};

//console.log(zx(c));
