import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WhoWeAre1Component} from "./who-we-are1/who-we-are1.component";
import {WhoWeAre2Component} from "./who-we-are2/who-we-are2.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"whoWeAre1", component:WhoWeAre1Component},
  {path:"whoWeAre2", component:WhoWeAre2Component},
  {path:"footer", component:FooterComponent},
  {path:"header", component:HeaderComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
