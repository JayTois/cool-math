import { Component } from "@angular/core";
import { GameModel } from "./game-list-model";
import { GamesService } from "./games.service";
import { game_items } from "./game_list_items";
import { GenreModel } from "./genre-list-model";
import { GenreService } from "./genre.service";
import { genre_items } from "./genre_list_items";

@Component({
    selector: 'cm-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent {

    games: GameModel[] = [];
    genres: GenreModel[] = [];

    constructor(private gamesService: GamesService, private genreService: GenreService) {

        //   for(var genre of genre_items){
        //   console.log(genre)
        //      this.genres.push(genre);
        //    }
    }

    //   @Input() img: string;
    //   @Input() title: string;
    //    @Input() description: string;


    ngOnInit(): void {
        this.gamesService.getProducts().subscribe(data => {
            console.log("Fetching game data...");
            for (var game of data) {
                console.log(game);
                this.games.push(game);
            }

        })

        this.genreService.getProducts().subscribe(data => {
            console.log("Fetching genre data...");
            for (var genre of data) {
                console.log(genre);
                this.genres.push(genre);
            }
        })
    }

}