import {Component, OnInit} from '@angular/core';
import {Film} from "../../models/Film";
import {FilmStorageService} from "../../services/film-storage.service";
import {FilmService} from "../../services/film.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FilmLongComponent} from "../film-long/film-long.component";

@Component({
  selector: 'app-film-short',
  templateUrl: './film-short.component.html',
  styleUrls: ['./film-short.component.css']
})
export class FilmShortComponent implements OnInit {
  film: Film;
  isFilmLoaded = false;
  saved_film_id: number;
  film_id: number;

  constructor(
    private filmStorageService: FilmStorageService,
    private filmService: FilmService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.film = this.filmStorageService.getFilm();
    this.saved_film_id = this.filmStorageService.getId();
    this.route.params.subscribe(params => {
      this.film_id = params['episode_id'];
      if (this.film === undefined || this.saved_film_id !== this.film_id) {
        this.filmService.getFilmById(this.film_id).subscribe(data => {
          this.film = data;
          this.isFilmLoaded = true;
          this.filmStorageService.setFilm(this.film);
          this.filmStorageService.setId(this.film_id);
        });
      } else {
        this.isFilmLoaded = true;
        this.film_id = this.saved_film_id;
      }
    });
  }

  long() {
    this.router.navigate(['/films/full/' + this.film_id]);
  }
}
