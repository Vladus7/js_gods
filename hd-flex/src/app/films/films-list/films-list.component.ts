import { Component, OnInit } from '@angular/core';
import {Film} from "../../models/Film";
import {FilmService} from "../../services/film.service";

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  films: Film[] = [];
  isFilmsLoaded = false;

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit(): void {
    this.filmService.getFilms()
      .subscribe(data => {
        console.log(data);
        this.films = data.results;
        this.isFilmsLoaded = true;
      });
  }

}
