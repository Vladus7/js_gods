import {ModuleWithProviders, NgModule} from '@angular/core';

import {FilmStorageService} from "../services/film-storage.service";
@NgModule()
export class GreetingModule {
  static forRoot(): ModuleWithProviders<GreetingModule> {
    return {
      ngModule: GreetingModule,
      providers: [FilmStorageService]
    };
  }
}
