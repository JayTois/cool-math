import { Component, Input, OnInit } from "@angular/core";
import { GamesService } from "./games.service";

@Component({
    selector: 'cm-game-tile',
    templateUrl: 'game.tile.component.html',
    styleUrls: ['game.tile.component.css']

})
export class GameTileComponent {
    @Input() img: string;
    @Input() title: string;
    @Input() description: string;

    constructor(private gamesService: GamesService) {
        this.img = "";
        this.title = "Missing Title";
        this.description = "Missing Description"
    }

    //  ngOnInit(): void {
    //    this.gamesService.getProducts().subscribe(data =>{
    //      console.log("Fetching product data...");
    //    console.log(data);


    //    })
    //}
}
