import {Component, Input, OnInit, Optional, SkipSelf} from '@angular/core';
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
  id: number;
  error: String;

  constructor(
    @Optional() public filmStorageService: FilmStorageService,
    private filmService: FilmService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.film = this.filmStorageService.getFilm();
    this.id = +this.route.snapshot.params.episode_id;
    console.log(this.id);
    if (this.film === undefined || this.film.id !== this.id) {
      this.loadFilm();
    } else {
      this.isFilmLoaded = true;
    }
  }

  short() : void {
    this.router.navigate(['short'], {relativeTo: this.route.parent});
  }

  loadFilm() : void {
    this.filmService.getFilmById(this.id).subscribe(data => {
      this.film = this.filmStorageService.saveFilm(data);
    }, error => {
      console.log(error);
      this.isFilmLoaded = true;
      this.error = "404 Film is undefound";
    }, () => {
      this.isFilmLoaded = true;
    });
  }
}
