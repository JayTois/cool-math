import { Component, Input } from "@angular/core";

@Component({
    selector: 'cm-game-genre',
    templateUrl: 'game.genre.component.html',
    styleUrls: ['game.genre.component.css']
})

export class GameGenreComponent{
    @Input() img: string;
    @Input() title: string;

    constructor(){
        this.img = "";
        this.title = "Missing Title"
    }
}

