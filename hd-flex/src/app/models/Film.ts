export interface Film {
  title: String,
  episode_id: number,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: String,
  characters: Characters,
  planets: Planets,
  starships: Starships,
  vehicles: Vehicles,
  species: Species,
  created: String,
  edited: String,
  url: String,
}

export interface Characters {
  [index: number]: String;
}

export interface Planets {
  [index: number]: String;
}

export interface Starships {
  [index: number]: String;
}

export interface Vehicles {
  [index: number]: String;
}

export interface Species {
  [index: number]: String;
}
