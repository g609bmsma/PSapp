import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddGamePageComponent } from './add-game-page/add-game-page.component';
import { ViewGamePageComponent } from './view-game-page/view-game-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'add', component: AddGamePageComponent },
  { path: 'view', component: ViewGamePageComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
