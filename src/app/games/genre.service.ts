import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { GenreModel } from "./genre-list-model"
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
    providedIn: 'root'
})

export class GenreService {
  //  private baseUrl: string = "https://cool-math-e891e-default-rtdb.firebaseio.com/"
   // private gamesEndpoint: string = "genres.json"

    constructor(private db : AngularFireDatabase) {
        
    }

    public getProducts() {
        return this.db.list<GenreModel>("genres").valueChanges();
    }

}

