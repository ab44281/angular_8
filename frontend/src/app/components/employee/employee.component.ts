import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'
import { Employee } from '../../models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(res =>{
      this.employees = res;
    }, err=>{
      console.log(err);
    });
  }

  deleteEmployee(emp){
    this.employeeService.deleteEmployee(emp.id).subscribe(res =>{
      let index = this.employees.indexOf(emp)
      this.employees.splice(index,1);
      alert("emp deleted");
    }, err=>{
      console.log(err);
    });
  }

}
