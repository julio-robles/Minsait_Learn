import { Component, OnInit } from '@angular/core';
import { CharacterInterface, CharacterResponseInterface } from '../list-pokemons/models/pokemon.interface'
import { RequestExampleService } from '../list-pokemons/services/request-example.service';

@Component({
  selector: 'app-mix-pokemons',
  templateUrl: './mix-pokemons.component.html',
  styleUrls: ['./mix-pokemons.component.scss']
})
export class MixPokemonsComponent implements OnInit {

  characterList: CharacterInterface[] = [];
  characterListFilter: CharacterInterface[] = [];
  characterListFull: CharacterInterface[] = [];
  filter: string;
  baseURL: string = 'https://pokeapi.co/api/v2/pokemon/?limit=';
  
  limit: number = 15; //Utilizo solo las 4 primeras temporadas por rendimiento!!!

  // Llamamos a nuestro servicio o inicializamos servicio
  constructor(private requestExampleService: RequestExampleService) {
    this.filter = '';

    // Real pokémons
    this.requestExampleService.getCharacters(this.baseURL+this.limit).subscribe( async (data: CharacterResponseInterface) => {   
      const results: CharacterInterface[] = data.results;
      for (let pokemon in results){
        let id = results[pokemon]['url'].split('/');
        await this.characterListFull.push(await fetch(results[pokemon]['url']).then( async response => response.json())
        .then(async data => {
          return { id: Number(id[id.length - 2]), name: results[pokemon]['name'], url: results[pokemon]['url'], image: data['sprites']['front_default'] };  
        }));
      }
    });

    // Fake pokémons
    fetch("http://localhost:3000/pokemons")
    .then( async response => await response.json())
    .then(async data => {
      for (let i in data){
        this.characterListFull.push({
          id: data[i].id,
          name: data[i].name,
          url: '',
          image: data[i].frontImage,
        });
      }
    });
  }

  async ngOnInit(){}
}
