import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { FormsModule } from '@angular/forms';
import { AdminCompComponent } from './admin-comp/admin-comp.component';
import { ProfCompComponent } from './prof-comp/prof-comp.component';
import { RouterModule } from '@angular/router';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { NavProfComponent } from './nav-prof/nav-prof.component';
import { GroupsCompComponent } from './groups-comp/groups-comp.component';
import { HomeAbsComponent } from './home-abs/home-abs.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AbsencListComponent } from './absenc-list/absenc-list.component';
import { MyRoutingOutletComponent } from './my-routing-outlet/my-routing-outlet.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginCompComponent,
    AdminCompComponent,
    ProfCompComponent,
    NavAdminComponent,
    NavProfComponent,
    GroupsCompComponent,
    HomeAbsComponent,
    StudentListComponent,
    AbsencListComponent,
    MyRoutingOutletComponent,

    
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
