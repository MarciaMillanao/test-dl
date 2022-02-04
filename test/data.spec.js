import { filter, sortData } from "../src/data.js";

describe("filter", () => {
  it("retorna pokemon filtrado cuando le paso un tipo específico", () => {
    const dataPokemon = [
      {
        name: "Bulbasaur",
        type: "grass",
      },
      {
        name: "Pikachu",
        type: "electric",
      },
    ];
    const filteredType = "grass";

    const actualFilteredPokemon = filter(dataPokemon, filteredType);

    expect(actualFilteredPokemon[0].name).toBe("Bulbasaur");
  });
});

describe("sortData", () => {
  it("retorna pikachu antes que bulbasaur cuando le paso 'des' como condición", () => {
    const dataPokemon = [
      {
        name: "Bulbasaur",
        type: "grass",
      },
      {
        name: "Pikachu",
        type: "electric",
      },
    ];
    const sortBy = 'name';
    const sortOrder = 'des'

    const actualFilteredPokemon = sortData(dataPokemon, sortBy, sortOrder);

    expect(actualFilteredPokemon[0].name).toBe("Pikachu");
    expect(actualFilteredPokemon[1].name).toBe("Bulbasaur");
  });
});