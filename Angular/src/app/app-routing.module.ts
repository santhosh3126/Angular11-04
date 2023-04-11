import { NgModule, createEnvironmentInjector } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Enrollment } from './Enrollment';
import { EnrollmentListComponent } from './enrollment-list/enrollment-list.component';

const routes: Routes = [
  { path: 'enr', component: EnrollmentListComponent },
  { path: 'add', component: Enrollment },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
