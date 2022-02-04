export const filter = (dataPokemon, condition) => {
  const filterType = dataPokemon.filter(element => {
    return element.type.includes(condition);
  })
  return filterType;
}

export const dataOrder = (data, sortBy, sortOrder) => {
  let orderPokemon = [];
  const orderData = data.sort((a,b) =>  a[sortBy].localeCompare(b[sortBy]));
  console.log(orderData);
  if (sortOrder === "az"){
    orderPokemon = orderData;
  }
  else{
    orderPokemon = orderData.reverse();
  }
  return orderPokemon;
}


