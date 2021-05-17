window.onload = function() {
  setTimeout(function () {
      Swal.fire({
          title: 'Bienvenido a la Pokedex',
          text: 'Con todos los Pokemons actualizados',
          imageUrl: "/images/pokemonIcon.png",
          confirmButtonText: 'Po vale',
          timer: 5000,
          timerProgressBar: true
        })
  }, 2000);
}

function checkPage(){
  if (document.getElementsByClassName("main-content__list-button").length != 0){
    Swal.fire({
        title: '¡Ya estas en la main!',
        icon: 'warning',
        confirmButtonText: 'Po vale',
        timer: 5000,
        timerProgressBar: true
    })
  }
  else{
    window.location.href="/";
  }
}

function search(pokemon){
  if (pokemon && pokemon.value != ''){
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.value)
    .then(response => {
      if(response.ok) {
        detail(pokemon.value);
      }
      else {
      Swal.fire({
        title: 'Pokemon no encontrado',
        icon: 'error',
        confirmButtonText: 'Po vale',
        timer: 5000,
        timerProgressBar: true
      })
    }
    })
    .catch(error => console.error(error))
  }
  return false;
}