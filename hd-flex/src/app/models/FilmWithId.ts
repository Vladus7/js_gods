import {Characters, Film, Planets, Species, Starships, Vehicles} from "./Film";
export class FilmWithId implements Film{
  characters: Characters;
  created: String;
  director: String;
  edited: String;
  episode_id: number;
  opening_crawl: String;
  planets: Planets;
  producer: String;
  release_date: String;
  species: Species;
  starships: Starships;
  title: String;
  url: String;
  vehicles: Vehicles;
  id: number;

  constructor(film: Film) {
    this.characters = film.characters;
    this.created = film.created;
    this.director = film.director;
    this.edited = film.edited;
    this.episode_id = film.episode_id;
    this.opening_crawl = film.opening_crawl;
    this.planets = film.planets;
    this.producer = film.producer;
    this.release_date = film.release_date;
    this.species = film.species;
    this.starships = film.starships;
    this.title = film.title;
    this.url = film.url;
    this.vehicles = film.vehicles;
    this.id = +film.url.charAt(28);
  }
}
