import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilmsListComponent} from "./films/films-list/films-list.component";
import {FilmShortComponent} from "./films/film-short/film-short.component";
import {FilmLongComponent} from "./films/film-long/film-long.component";

const routes: Routes = [
  {path: '', component: FilmsListComponent},
  {
    path: 'films', children: [
      {
        path: ':episode_id',
        component: FilmShortComponent,
      },
      {
        path: 'short/:episode_id',
        component: FilmShortComponent,
      },
      {
        path: 'full/:episode_id',
        component: FilmLongComponent,
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
