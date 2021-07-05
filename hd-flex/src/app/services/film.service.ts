import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const FILM_API = 'https://swapi.dev/api/films/'

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) {
  }

  getFilms(): Observable<any> {
    return this.http.get(FILM_API);
  }

  getFilmById(id: number): Observable<any> {
    return this.http.get(FILM_API + id);
  }

}
