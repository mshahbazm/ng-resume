import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProjectsListingComponent} from './projects-listing/projects-listing.component';
import {HomeComponent} from './home/home.component';
import {WorkExperienceComponent} from './work-experience/work-experience.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'experience', component: WorkExperienceComponent},
  {path: 'projects', component: ProjectsListingComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
