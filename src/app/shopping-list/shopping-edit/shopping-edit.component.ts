import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component ({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: [ './shopping-edit.component.css' ]
})
export class ShoppingEditComponent implements OnInit {

  constructor ( private shoppingListService: ShoppingListService ) {
  }

  ngOnInit () {
  }

  onAddIngredient ( nameInput: HTMLInputElement, amountInput: HTMLInputElement ) {
    if (nameInput.value.length !== 0 && amountInput.value.length !== 0) {
      this.shoppingListService.addIngredient (new Ingredient (nameInput.value, amountInput.valueAsNumber));
    }
  }

}
