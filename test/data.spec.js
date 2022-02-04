import { filter } from "../src/data.js";

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
