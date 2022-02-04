export const filter = (dataPokemon, type) => {
  return dataPokemon.filter((pokemon) => {
    return pokemon.type.includes(type);
  });
};

export const sortData = (data, sortBy, sortOrder) => {
  let orderPokemon = data.slice(); // puede usarse [..data] también
  const orderData = orderPokemon.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  console.log(orderData);
  return sortOrder === "asc" ? orderData : orderData.reverse();
};
