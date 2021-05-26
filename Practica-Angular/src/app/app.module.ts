import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RequestExampleService } from './list-pokemons/services/request-example.service';


import { FormsModule } from '@angular/forms';
import { PokemonHomeComponent } from './home-pokemon/home-pokemon.component';
import { PokemonComponent } from './list-pokemons/list-pokemon/list-pokemon.component';
import { PokemonListComponent } from './list-pokemons/list-pokemons.component';
import { PokemonDetailComponent } from './detail-pokemon/detail-pokemon.component';
import { HomePokemonInfoComponent } from './home-pokemon/home-pokemon-info/home-pokemon-info.component';
import { HomePokemonListComponent } from './home-pokemon/home-pokemon-list/home-pokemon-list.component';
import { HeaderComponent } from './header/header.component';
import { HomeWebInfoComponent } from './home-pokemon/home-web-info/home-web-info.component';
import { DetailPokemonHeadComponent } from './detail-pokemon/detail-pokemon-head/detail-pokemon-head.component';
import { DetailPokemonImagesComponent } from './detail-pokemon/detail-pokemon-images/detail-pokemon-images.component';
import { DetailPokemonTypesComponent } from './detail-pokemon/detail-pokemon-types/detail-pokemon-types.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonHomeComponent,
    PokemonListComponent,
    PokemonComponent,
    PokemonDetailComponent,
    HomePokemonInfoComponent,
    HomePokemonListComponent,
    HeaderComponent,
    HomeWebInfoComponent,
    DetailPokemonHeadComponent,
    DetailPokemonImagesComponent,
    DetailPokemonTypesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RequestExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
