import { Component, OnInit } from '@angular/core';
import { CharacterInterface, CharacterResponseInterface } from './models/pokemon.interface'
import { RequestExampleService } from './services/request-example.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-request-example',
  templateUrl: './request-example.component.html',
  styleUrls: ['./request-example.component.scss']
})
export class RequestExampleComponent implements OnInit {
  // declaramos la variable donde almacenamos nuestro resultado
  characterList: CharacterInterface[] = [];

  // Llamamos a nuestro servicio o inicializamos servicio
  constructor(private requestExampleService: RequestExampleService) {}
  
  // Al arrancar nuestra aplicación:
  ngOnInit() {
    // Utilizamos la función getCharacters para guardar nuestros resultados:
    this.requestExampleService.getCharacters()
    .subscribe((data: CharacterResponseInterface) => {
      

      const pokemons = data.results.map( (result) =>{

        let id = result['url'].split('/');
        let newId = Number(id[id.length - 2]);
        
        var image;
        await fetch(result['url'])
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(pokemonData => {
          image = pokemonData['sprites']['front_default'];
          console.log(image);
        });
      
        return { id: newId, name: result['name'], url: result['url'], image: image };
      });


      const results: CharacterInterface[] = pokemons;
      //console.log(results);
      const formattedResults = results.map(({ 
        id, 
        name, 
        url, 
        image 
      }) => ({
        id,
        name,
        url,
        image
      }));
      this.characterList = formattedResults;
    });
  }
}