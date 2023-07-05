import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

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
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    ReactiveFormsModule,
    MatIconModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
