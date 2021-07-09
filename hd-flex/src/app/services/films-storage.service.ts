import {Injectable} from '@angular/core';
import {Film} from "../models/Film";
import {FilmWithId} from "../models/FilmWithId";

@Injectable({
  providedIn: 'root'
})
export class FilmsStorageService {
  private _films: FilmWithId[] = [];
  private watchFilms: number[] = [];
  private foundedFilms: FilmWithId[] = [];

  constructor() {
  }

  saveAllFilms(films: Film[]): FilmWithId[] {
    films.every(films => this._films.push(new FilmWithId(films)));
    return this._films;
  }


  get films(): FilmWithId[] {
    return this._films;
  }

  searchFilms(request: String): FilmWithId[] {
    this.foundedFilms = this._films.filter((film: FilmWithId) => {
      return request.trim().toLowerCase()
        .split(" ").some(
          (r: string) => film.title.toLowerCase().indexOf(r) >= 0);
    });
    return this.foundedFilms;
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
