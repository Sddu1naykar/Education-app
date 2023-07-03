import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { ProfileComponent } from './profile/profile.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MarkscardComponent } from './markscard/markscard.component';
import { StaffMembersComponent } from './staff-members/staff-members.component';
import { ExaminationComponent } from './examination/examination.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ViestudentComponent } from './viestudent/viestudent.component';
import { CoursesComponent } from './courses/courses.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashbordComponent,
    TopnavbarComponent,
    SidenavbarComponent,
    ProfileComponent,
    AttendanceComponent,
    MarkscardComponent,
    StaffMembersComponent,
    ExaminationComponent,
    AboutComponent,
    ContactComponent,
    NotificationsComponent,
    ViestudentComponent,
    CoursesComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
