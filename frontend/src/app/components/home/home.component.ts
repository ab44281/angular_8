import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show: boolean = false;
  demo = [
    {"id":1,"name":"Licensed","description":"Incidunt","price":"170.00","quantity":56840},
    {"id":2,"name":"Rustic","description":"Sint","price":"302.00","quantity":9358},
    {"id":3,"name":"Fantastic","description":"cupiditat","price":"279.00","quantity":90316},
    {"id":4,"name":"Refined","description":"Saepe","price":"760.00","quantity":5899},
    {"id":5,"name":"Frozen","description":"magni","price":"760.00","quantity":5980}
];
selectedValue: string= 'Licensed';

people: any[] = [
  {
    "name": "Douglas  Pace",
    "age": 35,
    // "country": 'MARS'
    "country": 'UK'
  },
  {
    "name": "Mcleod  Mueller",
    "age": 32,
    "country": 'USA'
  },
  {
    "name": "Day  Meyers",
    "age": 21,
    "country": 'HK'
  },
  {
    "name": "Aguirre  Ellis",
    "age": 34,
    "country": 'UK'
  },
  {
    "name": "Cook  Tyson",
    "age": 32,
    "country": 'USA'
  }
];

peopleByCountry: any[] = [
  {
    'country': 'UK',
    'people': [
      {
        "name": "Douglas  Pace"
      },
      {
        "name": "Mcleod  Mueller"
      },
    ]
  },
  {
    'country': 'US',
    'people': [
      {
        "name": "Day  Meyers"
      },
      {
        "name": "Aguirre  Ellis"
      },
      {
        "name": "Cook  Tyson"
      }
    ]
  }
];

// reactive form
email = new FormControl('');
updateEmail() {  
  this.email.setValue('sonoojaiswal@javatpoint.com');  
}  


//ngStyle
getColor(country) { (2)
  switch (country) {
    case 'UK':
      return 'green';
    case 'USA':
      return 'blue';
    case 'HK':
      return 'red';
  }
}
//property Binding
public myId = "TestId";
public isDisabled = false;

public successClass = "text-success";
public hasError = true;
public isSpecial = true;
public messageClasses = {
  "text-success" : !this.hasError,
  "text-danger" : this.hasError,
  "text-special" : this.isSpecial
}
  constructor() { }

  ngOnInit() {
  }

}
