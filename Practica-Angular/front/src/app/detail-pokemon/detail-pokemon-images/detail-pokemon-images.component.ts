import { Input } from "@angular/core";
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-pokemon-images',
  templateUrl: './detail-pokemon-images.component.html',
  styleUrls: ['./detail-pokemon-images.component.scss']
})
export class DetailPokemonImagesComponent {
  @Input('parentToChild') pokemon;
}
