import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients : Ingredient[] = [
    new Ingredient("Apple" , 5),
    new Ingredient("Banana" ,15),
    new Ingredient("Pine Apple" , 3),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
