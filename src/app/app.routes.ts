import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'busqueda',
    loadComponent: () =>
      import('./components/busqueda/busqueda.component').then(
        (m) => m.BusquedaComponent
      ),
  },
  {
    path: 'actor',
    children: [
      {
        path: 'alta',
        loadComponent: () =>
          import('./components/actor/actor-alta/actor-alta.component').then(
            (m) => m.ActorAltaComponent
          ),
      },
      {
        path: 'listado',
        loadComponent: () =>
          import('./components/actor/actor-listado/actor-listado.component').then(
            (m) => m.ActorListadoComponent
          ),
      }
    ],
  },
  {
    path: 'peliculas',
    children: [
      {
        path: 'alta',
        loadComponent: () =>
          import(
            './components/pelicula/pelicula-alta/pelicula-alta.component'
          ).then((m) => m.PeliculaAltaComponent),
      },
      {
        path: 'listado',
        loadComponent: () =>
          import(
            './components/pelicula/pelicula-listado/pelicula-listado.component'
          ).then((m) => m.PeliculaListadoComponent),
      },
    ],
  },
  {
    path: 'bienvenido',
    redirectTo: '/busqueda',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/busqueda',
    pathMatch: 'full',
  },
];
