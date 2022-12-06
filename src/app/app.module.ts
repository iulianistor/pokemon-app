import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonCollectionComponent } from './pokemon-collection/pokemon-collection.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './button/button.component';
import { PokemonProfileComponent } from './pokemon-profile/pokemon-profile.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonCollectionComponent,
    NavbarComponent,
    ButtonComponent,
    PokemonProfileComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
