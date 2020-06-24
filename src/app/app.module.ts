import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeHeaderComponent } from './resume-header/resume-header.component';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientModule} from '@angular/common/http';
import { InformationService } from './service/information.service';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { OrganizationComponent } from './organization/organization.component';
import { LanguagesComponent } from './languages/languages.component';
import { EducationComponent } from './education/education.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfodialogComponent } from './infodialog/infodialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogModule } from '@angular/material/dialog';
import {CustomSnackModule} from  './custom-snack-bar/customSnack.module';
import { ShowSnackMessagesComponent } from './show-snack-messages/show-snack-messages.component';
@NgModule({
  declarations: [
    AppComponent,
    ResumeHeaderComponent,
    ProjectsComponent,
    ProfessionalExperienceComponent,
    SkillsComponent,
    OrganizationComponent,
    LanguagesComponent,
    EducationComponent,
    InfodialogComponent,
    ShowSnackMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CustomSnackModule
  ],
  providers: [InformationService],
  bootstrap: [AppComponent],
  entryComponents: [InfodialogComponent]
})
export class AppModule { }
