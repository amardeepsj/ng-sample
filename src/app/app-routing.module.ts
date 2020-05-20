import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component"
import { Page2Component } from "./components/page2/page2.component"


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'page2', component: Page2Component },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
