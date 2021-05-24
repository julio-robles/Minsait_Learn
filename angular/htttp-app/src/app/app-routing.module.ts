import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestExampleComponent } from './request-example/request-example.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component'
const routes: Routes = [
  //{ path: '', component },
  { path: 'pokemons', component: RequestExampleComponent },
  { path: 'pokemon/:pokemonID', component: PokemonDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
