import { HttpClient } from "@angular/common/http"
import { Injectable, OnInit } from "@angular/core"
import { GameModel } from "./game-list-model"

@Injectable({
    providedIn: 'root'
})

export class GamesService {
    //the slash at the end of the baseurl might need to be taken out
    private baseUrl: string = "https://cool-math-e891e-default-rtdb.firebaseio.com/"
    private gamesEndpoint: string = "games.json"

    constructor(private http: HttpClient) {
        //      for(var game of GameModel){
        //
        //        }
        //
    }
    
    
    public getProducts() {
        return this.http.get<GameModel []>(this.baseUrl + this.gamesEndpoint);
    }

}