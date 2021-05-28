import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-pokemon-types',
  templateUrl: './detail-pokemon-types.component.html',
  styleUrls: ['./detail-pokemon-types.component.scss']
})
export class DetailPokemonTypesComponent {
  @Input('parentToChild') pokemon;
}
