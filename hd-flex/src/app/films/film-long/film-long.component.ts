import {Component, OnInit} from '@angular/core';
import {FilmService} from "../../services/film.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Film} from "../../models/Film";
import {FilmStorageService} from "../../services/film-storage.service";

@Component({
  selector: 'app-film-long',
  templateUrl: './film-long.component.html',
  styleUrls: ['./film-long.component.css']
})
export class FilmLongComponent implements OnInit {
  film: Film;
  isFilmLoaded = false;
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
    if (this.film === undefined) {
      this.route.params.subscribe(params => {
        this.film_id = params['episode_id'];
        this.filmService.getFilmById(this.film_id).subscribe(data => {
          this.film = data;
          this.isFilmLoaded = true;
          this.filmStorageService.setFilm(this.film);
        });
      });
    } else {
      this.isFilmLoaded = true;
      this.film_id = this.film.episode_id
    }
  }

  short() {
    this.router.navigate(['/films/' + this.film_id]);
  }
}
