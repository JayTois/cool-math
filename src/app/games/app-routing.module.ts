import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './playlists-layout.component';
import { HomeLayoutComponent } from './home-layout.component';
import { TriviaComponent } from './trivia-layout.component';

const routes:Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'Playlists', component: PlaylistsComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'Trivia', component: TriviaComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
