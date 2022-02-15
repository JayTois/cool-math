import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { GameGenreComponent } from './games/game.genre.component';
import { GameTileComponent } from './games/game.tile.component';
import { AppRoutingModule } from './games/app-routing.module';
import { PlaylistsComponent } from './games/playlists-layout.component';
import { HomeLayoutComponent } from './games/home-layout.component';
import { TriviaComponent } from './games/trivia-layout.component';
import { BoxFactoryComponent } from './games/box-factory-game.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    GameTileComponent,
    GameGenreComponent,
    PlaylistsComponent,
    HomeLayoutComponent,
    TriviaComponent,
    BoxFactoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
