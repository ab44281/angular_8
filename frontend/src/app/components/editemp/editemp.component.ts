import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {

  employee: Employee;
  addForm: FormGroup;
  id: number = null;

  constructor(private fb: FormBuilder, private activeRouter: ActivatedRoute, private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getDetail(this.activeRouter.snapshot.params['id']);

    this.addForm = this.fb.group({
      empName: ['', Validators.compose([Validators.required])],
      empCode: ['', Validators.compose([Validators.required])],
      empSalary: ['', Validators.compose([Validators.required])]
    });
  }

  getDetail(id){
    this.employeeService.getEmployee(id).subscribe(data=>{
      alert(data.id);
      this.id = data.id;
      /* this.addForm.setValue({
        empName: data.name,
        empCode: data.emp_code,
        empSalary: data.salary
      }); */
      this.addForm.controls['empName'].setValue(data.name);
      this.addForm.controls['empCode'].setValue(data.emp_code);
      this.addForm.controls['empSalary'].setValue(data.salary);
      // this.addForm.setValue({empSalary: data.salary});
      console.log(data);
    });
  }

  updateEmployee(form:NgForm){
    this.employeeService.updateEmployee(this.id, form).subscribe(res=>{
      this.router.navigate(['/emp']);
    }, err=>{
      console.log(err);
    });
  }

}
