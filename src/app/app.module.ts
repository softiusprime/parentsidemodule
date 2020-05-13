import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { DatatableService } from './shared/datatable-service/datatable.service';

@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    FeesComponent,
    ClassTimetableComponent,
    HomeworkComponent,
    OnlineExamComponent,
    ApplyLeaveComponent,
    DownloadAssignmentsComponent,
    DownloadStudyMaterialComponent,
    DownloadSyllabusComponent,
    OtherDownloadComponent,
    AttendanceComponent,
    ExamScheduleComponent,
    ExamResultComponent,
    NoticeBoardComponent,
    TeacherReviewComponent,
    BooksComponent,
    BookIssuedComponent,
    TransportRoutesComponent,
    HostelRoomsComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DatatableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
