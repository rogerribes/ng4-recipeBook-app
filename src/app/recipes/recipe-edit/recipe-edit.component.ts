import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component ({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: [ './recipe-edit.component.css' ]
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipe: Recipe;

  constructor ( private recipeService: RecipeService, private route: ActivatedRoute ) {
  }

  ngOnInit () {
    this.route.params.subscribe (
        ( params: Params ) => {
          this.id = +params[ 'id' ];
          this.editMode = params[ 'id' ] != null;
          if (this.editMode) {
            this.recipe = this.recipeService.getRecipe (this.id);
          }else {
            this.recipe = new Recipe('', '', '', []);
          }
        }
    );
  }

  onSaveRecipe() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipe);
    }else {
      this.recipeService.addRecipe(this.recipe);
    }
  }

}
