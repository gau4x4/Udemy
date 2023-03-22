import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

import { Recipe } from '../../../model/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    ingredient: [],
  };

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    console.table(this.recipeItem);
  }

  recipeDetailSelected(): void {
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }
}
