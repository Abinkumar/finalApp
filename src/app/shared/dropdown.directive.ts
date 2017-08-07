import { Directive,HostListener,HostBinding } from '@angular/core';

@Directive({//decorator to say its a directive
  selector: '[appDropdown]'//attribute selector
})
export class DropdownDirective {
 @HostBinding('class.open') isOpen=false;//adding css class open and the rest is handle by angular
  
@HostListener('click') toggleOpen(){
  this.isOpen=!this.isOpen;

}
  constructor() { } 

}
