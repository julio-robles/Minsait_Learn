import { Input } from "@angular/core";
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-pokemon-head',
  templateUrl: './detail-pokemon-head.component.html',
  styleUrls: ['./detail-pokemon-head.component.scss']
})
export class DetailPokemonHeadComponent {
  @Input('parentToChild') pokemon;
}
