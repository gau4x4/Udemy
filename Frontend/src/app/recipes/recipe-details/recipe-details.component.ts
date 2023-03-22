import { Component, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

import { Recipe } from '../../model/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent {
  @Input() recipeItem: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    ingredient: [],
  };
  constructor(private recipeService: RecipeService) {}
  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipeItem.ingredient);
  }
}
