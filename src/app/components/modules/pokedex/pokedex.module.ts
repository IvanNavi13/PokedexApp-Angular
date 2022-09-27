import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';
import { FindComponent } from './pages/find/find.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokedexRoutingModule } from './pokedex-routing.module';



@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    FindComponent,
    PokedexComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
