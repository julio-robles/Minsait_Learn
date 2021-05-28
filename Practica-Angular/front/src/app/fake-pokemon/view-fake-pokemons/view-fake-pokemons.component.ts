import { Component, OnInit } from '@angular/core';
import { fakePokemon } from '../fake-pokemon.interface';

@Component({
  selector: 'app-view-fake-pokemons',
  templateUrl: './view-fake-pokemons.component.html',
  styleUrls: ['./view-fake-pokemons.component.scss']
})
export class ViewFakePokemonsComponent implements OnInit {

  pokemons: fakePokemon[] = [];

  constructor() {}

  ngOnInit(){
    fetch("http://localhost:3000/pokemons")
    .then( async response => response.json())
    .then(async data => {
      let pokemon: fakePokemon;
      for (let i in data){
        pokemon = {
          name: data[i].name,
          frontImage: data[i].frontImage,
          backImage: data[i].backImage,
          types: data[i].types,
        };
        this.pokemons.push(pokemon);
      }
    });
  }
}