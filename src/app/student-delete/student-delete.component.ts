import { Component } from '@angular/core';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent {
  admission=""

  readValues=()=>
  {
    let data:any={"admission":this.admission}
    console.log(data)
  }

}
