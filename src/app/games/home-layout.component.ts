import { Component } from "@angular/core";
import { GameModel } from "./game-list-model";
import { game_items } from "./game_list_items";
import { GenreModel } from "./genre-list-model";
import { genre_items } from "./genre_list_items";

@Component({
    selector: 'cm-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent{

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