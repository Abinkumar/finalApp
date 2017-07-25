import { Component, OnInit,ViewChild,ElementRef,EventEmitter,Output } from '@angular/core';
import{Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef:ElementRef;//property type elementref view child gets value
@ViewChild('amountInput') amountInputRef:ElementRef;
@Output() ingredientAdded=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){

    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount=this.amountInputRef.nativeElement.value;
    const newIngredient=new Ingredient(ingName,ingAmount);
    console.log("newingredient");
    console.log(newIngredient);
    this.ingredientAdded.emit(newIngredient);//passing new ingredient as data
    alert("hello");
  }

}
