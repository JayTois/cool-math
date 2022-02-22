import { Component, Input } from "@angular/core";
import { DailyModel } from "./daily-list-model";
import { daily_items } from "./daily_list_items";

@Component({
    selector: 'cm-daily-games',
    templateUrl: 'daily-games.component.html',
    styleUrls: ['daily-games.component.css']
})

export class DailyGamesComponent{
    @Input() img: string;
    @Input() title: string;
    @Input() description: string;

    dailygames: DailyModel[] = [];

    

    constructor(){
        this.img = "";
        this.title = "Missing Title";
        this.description = "Missing Description";

        for(var daily of daily_items){
            console.log(daily);
        }
    }


}