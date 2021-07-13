import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmsListComponent} from "./films/films-list/films-list.component";
import {FilmShortComponent} from "./films/film-short/film-short.component";
import {FilmLongComponent} from "./films/film-long/film-long.component";
import {FilmComponent} from "./films/film/film.component";

const routes: Routes = [
  {path: '', component: FilmsListComponent},
  {
    path: 'films/:episode_id', children: [
      {
        path: 'short',
        // component: FilmShortComponent,
        component: FilmComponent,
      },
      {
        path: 'full',
        // component: FilmLongComponent,
        component: FilmComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
