import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmsListComponent} from "./films/films-list/films-list.component";
import {FilmComponent} from "./films/film/film.component";

const routes: Routes = [
  {path: '', component: FilmsListComponent},
  {path: 'films/:episode_id', component: FilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
