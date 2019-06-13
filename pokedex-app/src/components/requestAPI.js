const getData = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`, {});
  if (response.status === 200) {
      const data = await response.json();
    return data;
  } else {
    throw new Error(`Unable to fetch data from PokeApi...`);
  }
};

export default getData;
