import {Component, HostListener, OnInit} from '@angular/core';
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
  watchFilms: number[] = [];

  constructor(
    private filmService: FilmService
  ) {
  }

  ngOnInit(): void {
    this.filmService.getFilms()
      .subscribe(data => {
        this.films = data.results;
        this.isFilmsLoaded = true;
      });
  }

  find(word: any): void {
    this.isFilmsLoaded = false;
    console.log(word.value);
    this.filmService.getFilms()
      .subscribe(data => {
        this.films = data.results.filter((film: Film) => {
          return word.value.trim().toLowerCase()
            .split(" ").some(
              (r: string) => film.title.toLowerCase().indexOf(r) >= 0);
        });
        this.isFilmsLoaded = true;
      });
    console.log(this.films);
  }

  show(episode_id: number) {
    this.addFilmInShowedArray(episode_id);
  }

  addFilmInShowedArray(id: number) {
    if(!this.hasFilmViewed(id)){
      this.watchFilms.push(id);
    }
  }

  hasFilmViewed(id: number) {
    return this.watchFilms.find(film => film === id);
  }
}
