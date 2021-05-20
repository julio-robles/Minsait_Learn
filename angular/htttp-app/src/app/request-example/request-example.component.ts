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
  constructor(private requestExampleService: RequestExampleService, private http: HttpClient) {}
  
  // Al arrancar nuestra aplicación:
  ngOnInit() {
    // Utilizamos la función getCharacters para guardar nuestros resultados:
    this.requestExampleService.getCharacters()
    .subscribe( async (data: CharacterResponseInterface) => {
      const results: CharacterInterface[] = data.results;

        let pokemons = [];
        for (let pokemon in results){
          let id = results[pokemon]['url'].split('/');
          await pokemons.push(await fetch(results[pokemon]['url']).then( async response => response.json())
          .then(async data => {
            //console.log(data);
            return { id: Number(id[id.length - 2]), name: results[pokemon]['name'], url: results[pokemon]['url'], image: data['sprites']['front_default'] };  
          }));
        }

        this.characterList = pokemons;
    });
  }
}



