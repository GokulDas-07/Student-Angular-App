import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentSearchComponent,
    StudentDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
