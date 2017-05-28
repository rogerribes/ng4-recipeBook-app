import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Injectable ()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient ('Apples', 5),
    new Ingredient ('Tomatoes', 10)
  ];

  ingredientAdded = new EventEmitter<void> ();

  constructor () {
  }

  addIngredient ( ingredient: Ingredient ) {
    this.ingredients.push (ingredient);
    this.ingredientAdded.emit ();
  }

  addIngredients ( ingredients: Ingredient[] ) {
    this.ingredients.push (...ingredients);
    this.ingredientAdded.emit();
  }

  getIngredients () {
    return this.ingredients.slice ();
  }
}
