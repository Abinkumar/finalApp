import { Directive } from '@angular/core';

@Directive({//decorator to say its a directive
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

}
