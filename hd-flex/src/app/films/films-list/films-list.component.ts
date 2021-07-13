import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {FilmService} from "../../services/film.service";
import {Router} from "@angular/router";
import {FilmsStorageService} from "../../services/films-storage.service";
import {FilmWithId} from "../../models/FilmWithId";

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  films: FilmWithId[] = [];
  isFilmsLoaded: boolean = false;

  constructor(
    private filmService: FilmService,
    private filmStorageService: FilmsStorageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.films = this.filmStorageService.films;
    if (this.films.length === 0) {
      this.filmService.getFilms()
        .subscribe(data => {
          this.films = this.filmStorageService.saveAllFilms(data.results);
          this.isFilmsLoaded = true;
        });
    } else {
      this.isFilmsLoaded = true;
    }
  }

  find(word: any): void {
    this.isFilmsLoaded = false;
    this.films = this.filmStorageService.searchFilms(word.value);
    this.isFilmsLoaded = true;
  }

  show(episode_id: number) {
    this.filmStorageService.addFilmInShowedArray(episode_id);
  }

  hasFilmViewed(id: number) {
    return this.filmStorageService.hasFilmViewed(id);
  }

  details(episode_id: number) {
    this.router.navigate(['/films/' + episode_id + '/short']);
  }
}

