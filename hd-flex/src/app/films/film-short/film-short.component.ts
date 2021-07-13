import {Component, Input, OnInit, Optional, SkipSelf} from '@angular/core';
import {FilmStorageService} from "../../services/film-storage.service";
import {FilmService} from "../../services/film.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FilmLongComponent} from "../film-long/film-long.component";
import {FilmWithId} from "../../models/FilmWithId";

@Component({
  selector: 'app-film-short',
  styleUrls: ['./film-short.component.css'],
  templateUrl: './film-short.component.html'
})
export class FilmShortComponent implements OnInit {
  film: FilmWithId;
  isFilmLoaded = false;

  constructor(
    @Optional() public filmStorageService: FilmStorageService,
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

  long() {
    this.router.navigate(['full'], {relativeTo: this.route.parent});
  }
}
