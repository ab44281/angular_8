import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  brews: object;
  lists: object; 
  prods: object;

  constructor( private _http: ListService) { }

  ngOnInit() {
    this._http.myMethod();

    this._http.getBeer().subscribe(data =>{
      this.brews = data;
      console.log(this.brews);      
    });

    this._http.getList().subscribe(data =>{
      this.lists = data;
      console.log(this.lists);      
    });

    this._http.getProd().subscribe(data =>{
      this.prods = data;
      console.log(this.prods);      
    });
  }

}
