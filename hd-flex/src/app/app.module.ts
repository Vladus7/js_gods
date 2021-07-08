import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FilmsListComponent} from './films/films-list/films-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatInputModule} from "@angular/material/input";
import {HighlightDirective} from './films/films-list/highlight.directive';
import {NavigationComponent} from './layout/navigation/navigation.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FilmShortComponent} from './films/film-short/film-short.component';
import {FilmLongComponent} from './films/film-long/film-long.component';
import {FilmStorageService} from "./services/film-storage.service";
import {GreetingModule} from "./greeting/greeting.module";

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    HighlightDirective,
    NavigationComponent,
    FilmShortComponent,
    FilmLongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatToolbarModule,
    GreetingModule.forRoot(),
  ],
  providers: [
    FilmStorageService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
