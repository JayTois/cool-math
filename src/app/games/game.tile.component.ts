import { Component, Input } from "@angular/core";

@Component({
    selector: 'cm-game-tile',
    templateUrl: 'game.tile.component.html',
    styleUrls: ['game.tile.component.css']

})
export class GameTileComponent{
    @Input() img: string;
    @Input() title: string;
    @Input() description: string;

    constructor(){
        this.img = "";
        this.title = "Missing Title";
        this.description = "Missing Description"
    }
}