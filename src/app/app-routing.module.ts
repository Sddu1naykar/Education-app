import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProfileComponent } from './profile/profile.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MarkscardComponent } from './markscard/markscard.component';
import { StaffMembersComponent } from './staff-members/staff-members.component';
import { ExaminationComponent } from './examination/examination.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ViestudentComponent } from './viestudent/viestudent.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component:LoginComponent },
  {path:'dashbord', component:DashbordComponent},
  { path: 'profile', component:ProfileComponent  },
  { path: 'attendance', component:  AttendanceComponent},
  { path: 'markscards', component: MarkscardComponent },  
  { path: 'examination', component: ExaminationComponent },
  { path: 'staffmembers', component: StaffMembersComponent },
  { path: 'about', component:  AboutComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'notification', component:NotificationsComponent},
  { path: 'viewstudent', component:ViestudentComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
