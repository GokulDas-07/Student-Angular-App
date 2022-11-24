import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentSearchComponent } from './student-search/student-search.component';

const routes: Routes = [
  {path:"",component:StudentEntryComponent},
  {path:"search",component:StudentSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
