import {Component, OnInit} from '@angular/core';
import {FilmService} from "../../services/film.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Film} from "../../models/Film";
import {FilmStorageService} from "../../services/film-storage.service";
import {FilmWithId} from "../../models/FilmWithId";

@Component({
  selector: 'app-film-long',
  templateUrl: './film-long.component.html',
  styleUrls: ['./film-long.component.css']
})
export class FilmLongComponent implements OnInit {
  film: FilmWithId;
  isFilmLoaded = false;

  constructor(
    private filmStorageService: FilmStorageService,
    private filmService: FilmService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.film = this.filmStorageService.getFilm();
    this.route.params.subscribe(params => {
      if (this.film === undefined || this.film.id !== params['episode_id']) {
        this.filmService.getFilmById(params['episode_id']).subscribe(data => {
          this.isFilmLoaded = true;
          this.film = this.filmStorageService.saveFilm(data);
        });
      } else {
        this.isFilmLoaded = true;
      }
    });
  }

  short() {
    this.router.navigate(['/films/' + this.film.id]);
  }
}
