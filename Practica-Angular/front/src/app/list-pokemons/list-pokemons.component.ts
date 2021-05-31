import { Component, OnInit } from '@angular/core';
import { CharacterInterface, CharacterResponseInterface } from './models/pokemon.interface'
import { RequestExampleService } from './services/request-example.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})


export class PokemonListComponent implements OnInit {
  // declaramos la variable donde almacenamos nuestro resultado
  CharacterResponseInterface: CharacterResponseInterface;
  characterList: CharacterInterface[] = [];
  characterListFilter: CharacterInterface[] = [];
  characterListFull: CharacterInterface[] = [];
  filter: string;
  baseURL: string = 'https://pokeapi.co/api/v2/pokemon/?limit=';
  
  limit: number = 493; //Utilizo solo las 4 primeras temporadas por rendimiento!!!

  // Llamamos a nuestro servicio o inicializamos servicio
  constructor(private requestExampleService: RequestExampleService) {
    this.filter = '';
    this.requestExampleService.getCharacters(this.baseURL+this.limit).subscribe( async (data: CharacterResponseInterface) => {   
      const results: CharacterInterface[] = data.results;
      let pokemons = [];
      for (let pokemon in results){
        let id = results[pokemon]['url'].split('/');
        await pokemons.push(await fetch(results[pokemon]['url']).then( async response => response.json())
        .then(async data => {
          return { id: Number(id[id.length - 2]), name: results[pokemon]['name'], url: results[pokemon]['url'], image: data['sprites']['front_default'] };  
        }));
      }
      this.characterListFull = pokemons;
    });
  }
  
  // Al arrancar nuestra aplicación:
  ngOnInit(){
    callRequestExampleService(this, this.baseURL+'25');
  }
  next(){
    callRequestExampleService(this, this.CharacterResponseInterface.next);
  }
  back(){
    callRequestExampleService(this, this.CharacterResponseInterface.previous);
  }
  onChangeFilter(filter: string){
    const newList: CharacterInterface[] = this.characterListFull.filter(pokemon => pokemon.name.toLowerCase().includes(filter.trim().toLowerCase()));
    this.characterListFilter = newList;
  }
}



function callRequestExampleService(self, url: string){
  self.requestExampleService.getCharacters(url).subscribe( async (data: CharacterResponseInterface) => {   
      const results: CharacterInterface[] = data.results;
      let pokemons = [];
      for (let pokemon in results){
        let id = results[pokemon]['url'].split('/');
        await pokemons.push(await fetch(results[pokemon]['url']).then( async response => response.json())
        .then(async data => {
          return { id: Number(id[id.length - 2]), name: results[pokemon]['name'], url: results[pokemon]['url'], image: data['sprites']['front_default'] };  
        }));
      }
      self.CharacterResponseInterface = data;
      self.CharacterResponseInterface.results = pokemons
    });
}