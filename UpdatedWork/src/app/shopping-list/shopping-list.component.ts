import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../model/ingredient.model';
import { ShoppingListService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredientList: Ingredient[] = [];

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredientList = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredientList = ingredients;
    });
  }
  onShoppingItemAdded(item: Ingredient): void {
    this.ingredientList.push(item);
  }
  onIngredientDeleted(item: string): void {
    this.ingredientList = this.ingredientList.filter(
      (ingredient: Ingredient) => {
        return ingredient.name !== item;
      }
    );
  }
}
