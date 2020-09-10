import { Directive, HostListener, HostBinding, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

  @Input('appDropdown') ddm:string;

   @HostListener('click') OnClick(){
     
   }
   
}
