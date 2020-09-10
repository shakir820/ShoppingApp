import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  toggleDdm:boolean = false;



  constructor() { }

  ngOnInit(): void {
  }

  @Output() featureSelected = new EventEmitter<string>();




  DropdownToggleBtnClicked(){
    this.toggleDdm = !this.toggleDdm;
  }

  dropdownItemsClicked(){
    this.toggleDdm = !this.toggleDdm;
  }
}
