import {Injectable} from '@angular/core';
import {Film} from "../models/Film";

@Injectable({
  providedIn: 'root'
})
export class FilmsStorageService {
  private films: Film[] = [];
  private watchFilms: number[] = [];
  private foundedFilms: Film[] = [];

  constructor(
  ) {
  }

  setAllFilms(films: Film[]) {
    this.films = films;
  }

  searchFilms(request: String): Film[] {
    this.foundedFilms = this.films.filter((film: Film) => {
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
