import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeHeaderComponent } from './resume-header/resume-header.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule} from '@angular/common/http';
import { InformationService } from './service/information.service';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component'
@NgModule({
  declarations: [
    AppComponent,
    ResumeHeaderComponent,
    AboutComponent,
    ProjectsComponent,
    ProfessionalExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [InformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
