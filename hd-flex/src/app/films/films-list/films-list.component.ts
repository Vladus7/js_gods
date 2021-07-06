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
  hashFilms: Film[] = [];
  isFilmsLoaded = false;
  watchFilms: number[] = [];

  constructor(
    private filmService: FilmService
  ) {
  }

  ngOnInit(): void {
    this.filmService.getFilms()
      .subscribe(data => {
        this.hashFilms = data.results;
        this.isFilmsLoaded = true;
        this.films = this.hashFilms;
      });
  }

  find(word: any): void {
    this.isFilmsLoaded = false;
    this.films = this.hashFilms.filter((film: Film) => {
      return word.value.trim().toLowerCase()
        .split(" ").some(
          (r: string) => film.title.toLowerCase().indexOf(r) >= 0);
    });
    this.isFilmsLoaded = true;
  }

  show(episode_id: number) {
    this.addFilmInShowedArray(episode_id);
  }

  addFilmInShowedArray(id: number) {
    if (!this.hasFilmViewed(id)) {
      this.watchFilms.push(id);
    }
  }

  hasFilmViewed(id: number) {
    return this.watchFilms.find(film => film === id);
  }
}
