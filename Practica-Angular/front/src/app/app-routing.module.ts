import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './list-pokemons/list-pokemons.component';
import { PokemonDetailComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonHomeComponent } from './home-pokemon/home-pokemon.component';
import { AboutComponent } from './about/about.component';
import { FakePokemonComponent } from './fake-pokemon/fake-pokemon.component';
import { DetailFakePokemonComponent } from './fake-pokemon/detail-fake-pokemon/detail-fake-pokemon.component';
import { MixPokemonsComponent } from './mix-pokemons/mix-pokemons.component'
const routes: Routes = [
  { path: '', component:  PokemonHomeComponent },
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemon/:pokemonID', component: PokemonDetailComponent },
  { path: 'fake-pokemon', component: FakePokemonComponent },
  { path: 'fake-pokemon/:pokemonID', component: DetailFakePokemonComponent},
  { path: 'mix-pokemons', component: MixPokemonsComponent},
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
