import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../model/ingredient.model';
import { Recipe } from '../model/recipe.model';
import { ShoppingListService } from './shopping.service';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  imgPath: string =
    'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  private recipes: Recipe[] = [
    new Recipe('Kadahi Paneer', 'Ek Number Paneer Dish', this.imgPath, [
      new Ingredient('Paneer', 200),
      new Ingredient('Spices', 20),
    ]),
    new Recipe('Vada Pao', 'Rohit Sharma ka Favourite', this.imgPath, [
      new Ingredient('Potato', 5),
      new Ingredient('Bread', 20),
    ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }
}
