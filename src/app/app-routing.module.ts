import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';

import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { LoginComponent } from './components/modules/auth/pages/login/login.component';
import { EnrollComponent } from './components/modules/auth/pages/enroll/enroll.component';
import { PokedexModule } from './components/modules/pokedex/pokedex.module';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path: '404',
    component: NotFoundComponent
  },
  // {
  //   path: 'pokedex',
  //   loadChildren:
  // },
  {
    path : 'auth',
    children : [
      {
        path : 'login',
        component : LoginComponent
      },
      {
        path : 'enroll/:id/:param/:name',
        component : EnrollComponent,
      },
      {
        path : '**',
        redirectTo : 'login'
      }
    ]
  },
  
  {
    path : 'authLazy',
    loadChildren: () => import('./components/modules/auth/auth.module').then(m => m.AuthModule),
  },

  {
    path: 'pokedex',
    loadChildren: () => import('./components/modules/pokedex/pokedex.module').then( m => m.PokedexModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },

  {
    path: '',       //Para evitar bucles, ya que toda url empieza con cadena vacia
    component: NotFoundComponent,
    pathMatch: 'full'
  },
  {
    path: '**',   // '**' es una ruta comodin, cuando no se encuentra ninguna ruta
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/**
 * Este archivo controlara las rutas del proyecto.
 * 
 * para asignar rutas se componen de path y de component
 * 
 * Empieza a buscar como se coloquen tipo if's anidados
 * 
 * '**' es una ruta comodin 
 * 
 * redirectTo: Esta propiedad indica a Angular que redirija desde una ruta vacía a la Ruta marcada
 * pathMatch: Esta propiedad le indica a Angular la cantidad de URL que debe coincidir. 
 * 
 * las rutas las lee como if's anidados
 */
