import {Component, OnInit} from '@angular/core';
import {Film} from "../../models/Film";
import {FilmService} from "../../services/film.service";
import {Router} from "@angular/router";
import {FilmStorageService} from "../../services/film-storage.service";

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  films: Film[] = [];
  isFilmsLoaded: boolean = false;

  constructor(
    private filmService: FilmService,
    private filmStorageService: FilmStorageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.filmService.getFilms()
      .subscribe(data => {
        this.films = data.results;
        this.filmStorageService.setAllFilms(this.films);
        this.isFilmsLoaded = true;
      });
  }

  find(word: any): void {
    this.isFilmsLoaded = false;
    this.films = this.filmStorageService.searchFilms(word.value);
    this.isFilmsLoaded = true;
  }

  show(episode_id: number) {
    this.filmStorageService.addFilmInShowedArray(episode_id);
  }

  hasFilmViewed(id: number) {
    return this.filmStorageService.hasFilmViewed(id);
  }

  details(episode_id: number) {
    this.router.navigate(['/films/' + episode_id]);
  }
}
