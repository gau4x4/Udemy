import { Component, OnInit } from '@angular/core';

import { Recipe } from '../model/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { RecipeListsComponent } from './recipe-lists/recipe-lists.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  recipe: Recipe = new Recipe('', '', '', []);

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }
}
