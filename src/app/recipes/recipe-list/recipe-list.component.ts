import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simple test', 'http://www.verkleedpret.com/wp-content/uploads/2017/04/Recipe_logo-1.jpeg')
  ];// // ];//object banako,executing like method in a constructor by passing argument
  constructor() { }

  ngOnInit() {
  }
onRecipeSelected(recipe:Recipe){
this.recipeWasSelected.emit(recipe);
}
}
