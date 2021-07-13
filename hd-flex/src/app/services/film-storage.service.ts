import {Injectable} from '@angular/core';
import {Film} from "../models/Film";
import {FilmWithId} from "../models/FilmWithId";

@Injectable({
  providedIn: 'root'
})
export class FilmStorageService {
  private film: FilmWithId;

  constructor() {
    console.log("FilmStorageService was generated");
  }

  getFilm(): FilmWithId {
    return this.film;
  }

  saveFilm(film: Film): FilmWithId {
    this.film = new FilmWithId(film);
    return this.film;
  }
}
