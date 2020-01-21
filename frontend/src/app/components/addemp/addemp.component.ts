import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  addForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.addForm = this.fb.group({
      // id: [],
      empName: ['', Validators.compose([Validators.required])],
      empCode: ['', Validators.compose([Validators.required])],
      empSalary: ['', Validators.compose([Validators.required])]
    });
  }

  addEmployee(){
    const empLoad = {
      name: this.addForm.controls.empName.value,
      emp_code: this.addForm.controls.empCode.value,
      salary: this.addForm.controls.empSalary.value,
    };
  
    this.employeeService.addEmployee(empLoad).subscribe(res=>{
      // let id = res['id'];
      this.router.navigate(['/emp']);
    }, err=>{
      console.log(err);
    });
  }

}
