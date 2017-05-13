import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    console.log('recipeSelected', this.recipe);
    this.recipeSelected.emit(this.recipe);
  }

}
