import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
      new Recipe('Test Recipe','This is simply a test','https://torange.biz/photo/6/6050/6050-FX-6-0-12-6-8-0.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
