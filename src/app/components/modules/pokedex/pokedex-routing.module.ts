import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './pages/add/add.component';
import { FindComponent } from './pages/find/find.component';
import { ListComponent } from './pages/list/list.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokemonResolver } from '../../../services/resolvers/pokemon.resolver';


const routes: Routes = [
  {
    path: '',
    // component: PokemonComponent,
    children: [
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'edit/:id',   //":" indica que habra un parametro
        component: PokemonComponent
      },
      {
        path: 'find',
        component: FindComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'pokemon/:id',   //":" indica que habra un parametro
        component: PokemonComponent,
        resolve: {
          pokemon: PokemonResolver
        }
      },
      {
        path: '',
        component: PokedexComponent,
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
