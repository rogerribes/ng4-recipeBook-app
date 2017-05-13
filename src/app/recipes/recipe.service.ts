import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe','This is simply a test','https://torange.biz/photo/6/6050/6050-FX-6-0-12-6-8-0.jpg'),
    new Recipe('Test Recipe 2','This is simply a test 2','https://torange.biz/photo/6/6050/6050-FX-6-0-12-6-8-0.jpg'),
    new Recipe('Test Recipe 3','This is simply a test 3','https://torange.biz/photo/6/6050/6050-FX-6-0-12-6-8-0.jpg'),
    new Recipe('Test Recipe 4','This is simply a test 4','https://torange.biz/photo/6/6050/6050-FX-6-0-12-6-8-0.jpg')
  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }




}
