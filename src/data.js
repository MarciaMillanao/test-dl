export const filter = (dataPokemon, type) => {
  return dataPokemon.filter((pokemon) => {
    return pokemon.type.includes(type);
  });
};

export const dataOrder = (data, sortBy, sortOrder) => {
  let orderPokemon = [];
  const orderData = data.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  console.log(orderData);
  if (sortOrder === "az") {
    orderPokemon = orderData;
  } else {
    orderPokemon = orderData.reverse();
  }
  return orderPokemon;
};
