import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
  name=""
  rollno=""
  admission=""
  phone=""
  college=""
  mail=""
  parent=""
  parentphone=""
  username=""
  password=""

  readValues=()=>
  {
    let data:any={"name":this.name,"rollno":this.rollno,"admission":this.admission,"phone":this.phone,"college":this.college,
  "mail":this.mail,"parent":this.parent,"parentphone":this.parentphone,"username":this.username,"password":this.password}
  console.log(data)
  }




}
