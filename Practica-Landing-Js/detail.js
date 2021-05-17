function parseIdDetail(event){
    detail(event.target.id);
}

function detail(idPokemon){
    fetch("https://pokeapi.co/api/v2/pokemon/" + idPokemon)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(data => {
        let search = document.getElementsByClassName("main-content__search")[0];
        if (search === undefined){
            let mainContent = document.getElementsByClassName("main-content")[0];
            mainContent.innerHTML = "<section class='main-content__search'><h2>Buscar por nombre o ID</h2><form onsubmit='return search(pokemon);' class='main-content__search-form'><input name='pokemon' type='text' placeholder='Pokémon o id del pokémon...'><input type='submit' value='Buscar'></form></section>" + mainContent.innerHTML;
        }

        // Borramos el interior del listado de pokemons
        let mainContent = document.getElementsByClassName("main-content__list")[0];
        mainContent.innerHTML = '';
        
        let mainContentList = document.createElement("div");
        mainContentList.className = "main-content__list-show";

        // Main pokemon container
        let divPokemon = document.createElement("div");
        divPokemon.className = "main-content__pokemon";
        
        // Name
        let namePokemon = document.createElement("h1");
        let textNamePokemon = document.createTextNode(data.name)    
        namePokemon.appendChild(textNamePokemon);
        divPokemon.appendChild(namePokemon);

        // Images
        let divImagesPokemon = document.createElement("div");
        divImagesPokemon.className = "main-content__pokemon-images"; 
        let imgFront = document.createElement("img");
        imgFront.src = data.sprites.front_default;
        divImagesPokemon.appendChild(imgFront);

        let imgBack = document.createElement("img");
        imgBack.src = data.sprites.back_default;
        divImagesPokemon.appendChild(imgBack);

        divPokemon.appendChild(divImagesPokemon);

        // Types
        let typePokemon;
        let textTypePokemon;
        let divTypesPokemon = document.createElement("div");
        divTypesPokemon.className = "main-content__pokemon-types";    

        let typesPokemon = document.createElement("h2");
        let textTypesPokemon = document.createTextNode("Tipos de " + data.name + ":")
        typesPokemon.appendChild(textTypesPokemon);

        divPokemon.appendChild(typesPokemon);

        for (type in data.types){
            typePokemon = document.createElement("h3");
            typePokemon.className = "main-content__pokemon-type main-content__pokemon-type-" + data.types[type].type.name;
            textTypePokemon = document.createTextNode(data.types[type].type.name);
            typePokemon.appendChild(textTypePokemon);
            
            divTypesPokemon.appendChild(typePokemon);
        }
        divPokemon.append(divTypesPokemon);

        mainContentList.append(divPokemon);
        mainContent.append(mainContentList);
  });
  



    
}