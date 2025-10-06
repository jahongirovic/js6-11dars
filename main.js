import pokemons from "./pokemons.js";
let input = document.querySelector("input");
let select = document.querySelectorAll("select");
let button = document.querySelector("button");
let cards = document.querySelector("#cards");


function createPokemonCard(pokemon) {
  cards.innerHTML = "";

  pokemon.map((item) => {
    let card = document.createElement("div");
    card.classList.add(
      "bg-[#FFFF00]",
      "rounded-[15px]",
      "min-w-[250px]",
      "overflow-hidden",
      "text-center",
      "flex-1"
    );

    card.innerHTML = `
        <div class="flex justify-end">
          <p class="bg-[#FF0000] py-[9px] px-[5px] text-white font-extrabold">
            ${item.num}
          </p>
        </div>
        <p>${item.name}</p>
        <div class="flex justify-center">
          <img src="${item.img}" alt="" />
        </div>
        <p>${item.type}</p>
        <p>Candy count: ${item.candy_count || 0}</p>
        <p>6.9 kg</p>
        <p>Fire Ice Flying Psychic</p>
        <div>
          <p>20:00</p>
        </div>
    `;

    cards.append(card);
  });
}



createPokemonCard(pokemons);
