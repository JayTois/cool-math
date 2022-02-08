import { Component } from '@angular/core';
import { GameModel } from './games/game-list-model';
import { game_items } from './games/game_list_items';
import { GenreModel } from './games/genre-list-model';
import { genre_items } from './games/genre_list_items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cool-math';
  games: GameModel[] = [];
  genres: GenreModel [] = [];

  constructor(){
    for(var game of game_items){
      this.games.push(game);
    }
    for(var genre of genre_items){
      console.log(genre)
      this.genres.push(genre);
    }
  }
}
