import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { FormsModule } from '@angular/forms';
import { AdminCompComponent } from './admin-comp/admin-comp.component';
import { ProfCompComponent } from './prof-comp/prof-comp.component';
import { RouterModule } from '@angular/router';
import { GroupsCompComponent } from './groups-comp/groups-comp.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AbsencListComponent } from './absenc-list/absenc-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginCompComponent,
    AdminCompComponent,
    ProfCompComponent,
    GroupsCompComponent,
   
    StudentListComponent,
    AbsencListComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
