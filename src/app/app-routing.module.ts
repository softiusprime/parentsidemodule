import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FeesComponent } from './fees/fees.component';
import { ClassTimetableComponent } from './class-timetable/class-timetable.component';
import { HomeworkComponent } from './homework/homework.component';
import { OnlineExamComponent } from './online-exam/online-exam.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { DownloadAssignmentsComponent } from './download-assignments/download-assignments.component';
import { DownloadStudyMaterialComponent } from './download-study-material/download-study-material.component';
import { DownloadSyllabusComponent } from './download-syllabus/download-syllabus.component';
import { OtherDownloadComponent } from './other-download/other-download.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ExamScheduleComponent } from './exam-schedule/exam-schedule.component';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { TeacherReviewComponent } from './teacher-review/teacher-review.component';
import { BooksComponent } from './books/books.component';
import { BookIssuedComponent } from './book-issued/book-issued.component';
import { TransportRoutesComponent } from './transport-routes/transport-routes.component';
import { HostelRoomsComponent } from './hostel-rooms/hostel-rooms.component';
import { DemoComponent } from './demo/demo.component';


const routes: Routes = [
  { path:'my-profile', component:MyProfileComponent },
  { path:'fee', component:FeesComponent },
  { path:'class-timetable', component:ClassTimetableComponent },
  { path:'homework',component:HomeworkComponent },
  { path:'online-exam',component:OnlineExamComponent },
  { path:'apply-leave',component:ApplyLeaveComponent },
  { path:'download-assignments',component:DownloadAssignmentsComponent},
  { path:'download-study-material',component:DownloadStudyMaterialComponent },
  { path:'download-syllabus',component:DownloadSyllabusComponent },
  { path:'other-download',component:OtherDownloadComponent},
  { path:'attendance',component:AttendanceComponent},
  { path:'exam-schedule',component:ExamScheduleComponent},
  { path:'exam-result',component:ExamResultComponent},
  { path:'notice-board',component:NoticeBoardComponent},
  { path:'teacher-review',component:TeacherReviewComponent},
  { path:'books',component:BooksComponent},
  { path:'book-issued',component:BookIssuedComponent},
  { path:'transport-routes',component:TransportRoutesComponent},
  { path:'hostel-rooms',component:HostelRoomsComponent},
  { path:'', component:DemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
