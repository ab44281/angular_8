import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee : object;

  constructor(private _http: EmployeeService) { }

  ngOnInit() {
    this._http.getEmployeeList().subscribe(data=>{
      this.employee = data;
      console.log(this.employee);
    });
  }



}
