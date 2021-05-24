import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemonID: string;
  pokemonName: string;
  pokemonFrontImg: string;
  pokemonBackImg: string;
  pokemonTypes: string[] = [''];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.route.paramMap.subscribe( params => {
      this.pokemonID = params.get('pokemonID');
      fetch('https://pokeapi.co/api/v2/pokemon/' + this.pokemonID)
      .then( response => response.json())
      .then( data => {
        //console.log(data)
        this.pokemonName = data.name;
        this.pokemonFrontImg = data.sprites.front_default;
        this.pokemonBackImg = data.sprites.back_default;
        this.pokemonTypes;
        for (let type in data.types){
          this.pokemonTypes.push(data.types[type].type.name);
        }        
      });
    });
  }
}
