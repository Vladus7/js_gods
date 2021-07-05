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

interface Characters {
  [index: number]: String;
}

interface Planets {
  [index: number]: String;
}

interface Starships {
  [index: number]: String;
}

interface Vehicles {
  [index: number]: String;
}

interface Species {
  [index: number]: String;
}
