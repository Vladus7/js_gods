import {Component, OnInit} from '@angular/core';
import {FilmService} from "../../services/film.service";
import {Film} from "../../models/Film";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  film: Film;
  isFilmLoaded = false;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.filmService.getFilmById(params['episode_id']).subscribe(data => {
        this.film = data;
        this.isFilmLoaded = true;
      });
    });
  }
}
