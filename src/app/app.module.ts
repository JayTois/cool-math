import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { GameGenreComponent } from './games/game.genre.component';
import { GameTileComponent } from './games/game.tile.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    GameTileComponent,
    GameGenreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
