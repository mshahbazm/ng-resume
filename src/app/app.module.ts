import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuickViewComponent } from './quick-view/quick-view.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { EducationComponent } from './education/education.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsListingComponent } from './projects-listing/projects-listing.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    QuickViewComponent,
    AboutComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    TestimonialsComponent,
    EducationComponent,
    CertificationsComponent,
    NotFoundComponent,
    ProjectsListingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
