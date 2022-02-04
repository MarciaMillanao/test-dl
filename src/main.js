import { filter, dataOrder } from './data.js';
import data from './data/pokemon/pokemon.js';


const dataPokemon = data.pokemon;

window.onload = () => {
  showData(dataPokemon);
};

const showData = (dataPokemon) => {
  for(let i = 0; i < dataPokemon.length; i++){
    document.getElementById("root").innerHTML += `<ul class="container-image">
                                                    <li>
                                                      <figure>
                                                        <a href="#miModal">
                                                          <img src="${dataPokemon[i].img}" alt="Image Pokemon">
                                                        </div>
                                                        </a>
                                                      </figure>
                                                      <div>
                                                        <h2>${dataPokemon[i].name}</h2>
                                                      </div>
                                                    </li>
                                                </ul>`
  }
}

const filterSelect = document.getElementById("filters");
filterSelect.addEventListener('change', () => {
  let condition = document.getElementById("filters").value;
  let filterPokemon = filter(dataPokemon, condition);
  document.getElementById("root").innerHTML = "";
  filterPokemon.forEach((element) => {
    document.getElementById("root").innerHTML += `<ul class="container-image">
                                                    <li>
                                                      <figure>
                                                        <a href="">
                                                        <img src="${element.img}" alt="Image Pokemon" id="${element.name}">
                                                        </a>
                                                      </figure>
                                                      <div>
                                                        <h2>${element.name}</h2>
                                                        <p>${element.type}</p>
                                                      </div>
                                                    </li>
                                                </ul>`
  })
})

const orderSelect = document.getElementById("order");
orderSelect.addEventListener('change', () => {
  let condition = document.getElementById("filters").value;
  let order = document.getElementById("order").value;
  let filterPokemon = filter(dataPokemon, condition);
  let orderPokemon = dataOrder(filterPokemon,"name", order);
  document.getElementById("root").innerHTML = "";
  orderPokemon.forEach((element) => {
    document.getElementById("root").innerHTML += `<div class="container-image">
                                                    <img src="${element.img}" alt="Image Pokemon">
                                                    <p>${element.name}</p>
                                                    <p>${element.type}</p>
                                                  </div>`
  })
})