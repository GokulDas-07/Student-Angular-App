import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentSearchComponent } from './student-search/student-search.component';

const routes: Routes = [
  {path:"",component:StudentEntryComponent},
  {path:"search",component:StudentSearchComponent},
  {path:"delete",component:StudentDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
