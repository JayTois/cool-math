import { Injectable, OnInit } from "@angular/core"
import { GameModel } from "./game-list-model"
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})

export class GamesService {
    //the slash at the end of the baseurl might need to be taken out
    // private baseUrl: string = "https://cool-math-e891e-default-rtdb.firebaseio.com/"
    // private gamesEndpoint: string = "games.json"

    constructor(private db : AngularFireDatabase) {
        
    }
    
    
    public getProducts() {
        return this.db.list<GameModel>("games").valueChanges();
    }

}