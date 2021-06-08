class Pokemon{
    constructor(name, id){
        this.name = name;
        this.id = id;

        const imgFront = document.createElement("img");
        imgFront.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + this.id + ".png";
        imgFront.id = this.id;
        this.imgFront = imgFront;
        
        const imgBack = document.createElement("img");
        imgBack.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" + this.id + ".png";
        imgBack.id = this.id;
        this.imgBack = imgBack;    
    }
}




fetch("https://pokeapi.co/api/v2/pokemon/")
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(data => {
      console.log(data);
    count = data.count;
    offset = 0;
    offsetCount = 0;
    for(let i = 39; i > 0 && offsetCount == 0; i--){
        if (count % i == 0) offsetCount = i;
    }    
    if (offsetCount == 0) offsetCount = 20;
});


function nextList(){
    offset += offsetCount;
    if (offset < count) list(offset);
}

function backList(){
    offset -= offsetCount;
    if (offset < 0) offset = 0;
    list(offset);
}

function checkList(offset=0, limit=offsetCount){
    let pokemonList = document.getElementsByClassName("main-content__list-show")[0];
    if (pokemonList.hasChildNodes()){
        pokemonList.innerHTML = '';
        document.getElementsByClassName("main-content__list-buttons")[0].innerHTML = '';
    }
    else{
        list(offset, limit);
    }
}

function list(offset, limit=offsetCount){
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=" + offset + "&limit=" + limit)
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(data => {
        //console.log(data)
        let pokemonList = [];
        //Recogemos de la API de pokemon todos los pokemons, está capado a 20, así que iremos recibiendo de 20 en 20...
            for (n in data.results){
                id = data.results[n].url.split('/'); //Cortamos la URL para tener la ID del pokemon
                pokemon = new Pokemon(data.results[n].name, id[id.length - 2]);
                pokemonList.push(pokemon);   
            }
        //console.log(pokemonList);
    
        let divPokemonList =  document.getElementsByClassName("main-content__list-show")[0];
        divPokemonList.innerHTML = '';
    
        for(n in pokemonList){
            divPokemon = document.createElement("div");
            divPokemon.className = "main-content__pokemon";
            divPokemon.onclick = parseIdDetail;
            divPokemon.id = pokemonList[n].id;
        
            namePokemon = document.createElement("h3");
            namePokemon.id = pokemonList[n].id;
            textNamePokemon = document.createTextNode(pokemonList[n].name)    
            namePokemon.appendChild(textNamePokemon);
            
            
            divPokemon.appendChild(namePokemon);
            divPokemon.appendChild(pokemonList[n].imgFront);
            
            
            divPokemonList.appendChild(divPokemon);
        }
    
    
        let divButtonsList =  document.getElementsByClassName("main-content__list-buttons")[0];
        if (divButtonsList) divButtonsList.innerHTML = '';
    
        if (offset > 0){
            buttonBack = document.createElement("button");
            buttonBack.className = "main-content__list-back";
            buttonBack.onclick = backList;    
            divButtonsList.appendChild(buttonBack);
        }
    
        if (offset + limit < count){
            buttonNext = document.createElement("button");
            buttonNext.className = "main-content__list-next";
            buttonNext.onclick = nextList;    
            divButtonsList.appendChild(buttonNext);
        }
    });    
}




function fullList(){
    if (document.getElementsByClassName("main-content__search").length == 0){
        Swal.fire({
            title: '¡Ya estas en el listado!',
            icon: 'warning',
            confirmButtonText: 'Po vale',
            timer: 5000,
            timerProgressBar: true
        })
    }
    else{
        offset = 0;
        
        // Borramos el boton para listar pokemons
        let divPokemonList = document.getElementsByClassName("main-content__list")[0];
        let buttonPokemonList = document.getElementsByClassName("main-content__list-button")[0];
        if (buttonPokemonList) divPokemonList.removeChild(buttonPokemonList);

        // Generamos el titulo del listado
        let titlePokemonList = document.getElementsByClassName("main-content__list-h2")[0];
        if (titlePokemonList === undefined){
            let titlePokemonList = document.createElement("h2");
            titlePokemonList.className = "main-content__list-h2";
            let textTitlePokemonList = document.createTextNode("Lista de todos los pokémons en la pokedex");
            
            
            titlePokemonList.appendChild(textTitlePokemonList);
            divPokemonList.insertBefore(titlePokemonList, divPokemonList.firstChild);
        }

        

        // Borramos el buscador de pokemons
        let divContent =  document.getElementsByClassName("main-content")[0];
        let divPokemonSearch =  document.getElementsByClassName("main-content__search")[0];
        if (divPokemonSearch) divContent.removeChild(divPokemonSearch)

        list(offset, count);
    }      
}