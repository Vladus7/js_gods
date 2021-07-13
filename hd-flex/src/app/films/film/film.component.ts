import {Component, Host, OnInit, Optional, ViewChild} from '@angular/core';
import {FilmStorageService} from "../../services/film-storage.service";
import {ActivatedRoute, PRIMARY_OUTLET} from "@angular/router";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  url: String;

  constructor(
    private route: ActivatedRoute,
    @Optional() private filmStorageService: FilmStorageService,
  ) { }

  ngOnInit(): void {
    this.url = this.route.snapshot.url[0].path;
  }

}
