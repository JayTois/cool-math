import { Component, OnInit } from '@angular/core';
import { GameModel } from 'src/app/games/game-list-model';
import { GamesService } from 'src/app/games/games.service';

@Component({
  selector: 'cm-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  constructor(private gs:GamesService) { }

  ngOnInit(): void {
  }

  addProduct(game:GameModel){
    // console.log("You clicked add product!");
    //console.log(game);
    this.gs.addProduct(game);
  }

}
