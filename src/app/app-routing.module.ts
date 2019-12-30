import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThemeComponent } from './theme/theme.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {ProjectsListingComponent} from "./projects-listing/projects-listing.component";

const routes: Routes = [
  {path: '', component: ThemeComponent},
  {path: 'projects', component: ProjectsListingComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
