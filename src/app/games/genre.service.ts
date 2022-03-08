import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { GenreModel } from "./genre-list-model"

@Injectable({
    providedIn: 'root'
})

export class GenreService {
    private baseUrl: string = "https://cool-math-e891e-default-rtdb.firebaseio.com/"
    private gamesEndpoint: string = "genres.json"

    constructor(private http: HttpClient) {

    }

    public getProducts() {
        return this.http.get<GenreModel []>(this.baseUrl + this.gamesEndpoint);
    }

}

