import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './list-pokemons/list-pokemons.component';
import { PokemonDetailComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonHomeComponent } from './home-pokemon/home-pokemon.component';
import { AboutComponent } from './about/about.component'
const routes: Routes = [
  { path: '', component:  PokemonHomeComponent },
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemon/:pokemonID', component: PokemonDetailComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
