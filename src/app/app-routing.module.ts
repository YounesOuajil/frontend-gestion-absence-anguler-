import { NgModule, Component } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AdminCompComponent } from './admin-comp/admin-comp.component';
import { ProfCompComponent } from './prof-comp/prof-comp.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { GroupsCompComponent } from './groups-comp/groups-comp.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AbsencListComponent } from './absenc-list/absenc-list.component';
const routes: Routes = [
  { path:'admin-comp', component: AdminCompComponent },
  { path:'prof-comp', component: ProfCompComponent },
  { path:'', component: LoginCompComponent },
  { path:'route-for-G/:id', component: GroupsCompComponent,
    children: [
      { path: 'student_list', component: StudentListComponent, outlet: 'myout' },
      { path: 'absenc_list', component: AbsencListComponent, outlet: 'myout' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
