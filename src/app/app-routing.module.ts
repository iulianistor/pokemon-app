import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCollectionComponent } from './pokemon-collection/pokemon-collection.component';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';

export const routes: Routes = [
  {
    path: '',
    component: PokemonCollectionComponent,
  },
  {
    path: 'pokemon/:name',
    component: PokemonProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
