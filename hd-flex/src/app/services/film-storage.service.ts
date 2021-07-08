import {Injectable} from '@angular/core';
import {Film} from "../models/Film";

@Injectable({
  providedIn: 'root'
})
export class FilmStorageService {
  private film: Film;
  private id: number;

  constructor(
    ) {
    console.log("FilmStorageService is created");
  }

  getFilm(): Film{
    return this.film;
  }

  setFilm(film: Film): void {
   this.film = film;
  }

  getId(): number{
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }
}
