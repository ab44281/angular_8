import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  private employee : Employee[] = [];

  constructor(private _http: EmployeeService) { }

  ngOnInit() {

    this._http.getEmployeeList().subscribe((data:Employee[])=>{
      this.employee = data;
      console.log(this.employee);
    });
  }

  editEmp(){}



}
