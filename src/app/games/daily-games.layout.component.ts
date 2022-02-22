import { Component } from "@angular/core";
import { daily_items } from "./daily_list_items";
import { DailyModel } from "./daily-list-model";

@Component({
    selector: 'cm-daily-games-layout',
    templateUrl: 'daily-games.layout.component.html',
    styleUrls: ['daily-games.layout.component.css']
})

export class DailyLayoutComponent {
     dailyGames: DailyModel[] = [];

     constructor(){
         for(var daily of daily_items){
             this.dailyGames.push;
         }
     }
}