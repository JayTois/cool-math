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
import { DailyGamesComponent } from './games/daily-games.component';
import { DailyLayoutComponent } from './games/daily-games.layout.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddGameComponent } from './admin/add-game/add-game.component';
import { FormsModule } from '@angular/forms';

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
    BoxFactoryComponent,
    DailyGamesComponent,
    DailyLayoutComponent,
    UserInfoComponent,
    AddGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
