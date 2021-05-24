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
  characterListFilter: CharacterInterface[] = [];
  characterFilter: CharacterInterface[] = [];
  filter: string;

  // Llamamos a nuestro servicio o inicializamos servicio
  constructor(private requestExampleService: RequestExampleService) {
    this.filter = '';
  }
  
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
            return { id: Number(id[id.length - 2]), name: results[pokemon]['name'], url: results[pokemon]['url'], image: data['sprites']['front_default'] };  
          }));
        }

        this.characterList = pokemons;
        this.characterListFilter = this.characterList;
    });
  }

  onChangeFilter(filter: string) {
    const newList: CharacterInterface[] = this.characterList.filter(el => el.name.toLowerCase().includes(filter.trim().toLowerCase()));
    this.characterListFilter = newList;
  }
}



