import { Input } from "@angular/core";
import { Component } from '@angular/core';

@Component({
  selector: 'PokemonComponent',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class PokemonComponent {
  @Input('parentToChild') pokemon;
}
