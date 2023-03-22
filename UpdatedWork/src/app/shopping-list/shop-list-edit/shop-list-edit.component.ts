import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';

import { Ingredient } from '../../model/ingredient.model';

@Component({
  selector: 'app-shop-list-edit',
  templateUrl: './shop-list-edit.component.html',
  styleUrls: ['./shop-list-edit.component.scss'],
})
export class ShopListEditComponent implements OnInit {
  @Output() shoppingList = new EventEmitter<Ingredient>();
  @Output() deleteIngredient = new EventEmitter<string>();

  // shoppingItem: Shopping = {};
  itemName: string = '';
  itemAmount: number = 10;

  constructor() {}
  ngOnInit(): void {}
  shoppingItemAdded(): void {
    const shoppingItem: Ingredient = {
      name: this.itemName,
      amount: this.itemAmount,
    };
    this.shoppingList.emit(shoppingItem);
  }
  clearInputs(): void {
    this.itemName = '';
    this.itemAmount = 0;
  }
  deleteItems():void{
    this.deleteIngredient.emit(this.itemName);
  }
}
