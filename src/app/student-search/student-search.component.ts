import { Component } from '@angular/core';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent {
  admission=""

  readValues=()=>
  {
    let data:any={"admission":this.admission}
    console.log(data)
  }

}
