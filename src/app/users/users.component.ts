import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users:{id:number, name:string}[] = [
    {id:1, name:'Shakir'},
    {id:2, name:'Max'},
    {id:3, name:'Billal'}
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
