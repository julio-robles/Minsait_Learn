import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from './pokemon.interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  id: string;
  types: string[] = [''];
  pokemon: Pokemon;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.paramMap.subscribe( params => {
      this.id = params.get('pokemonID');
      fetch('https://pokeapi.co/api/v2/pokemon/' + this.id)
      .then( response => response.json())
      .then( data => {
        for (let type in data.types){
          this.types.push(data.types[type].type.name);
        }     
        this.pokemon = {id : this.id, name : data.name, frontImage : data.sprites.front_default, backImage : data.sprites.back_default, types : this.types};   
      });
    });
  }
}
