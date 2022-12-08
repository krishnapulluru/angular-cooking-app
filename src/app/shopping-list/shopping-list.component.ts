import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
import { shoppingListService } from './shopping-list.service';
@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    ingredients: Ingredient[];

    constructor(private shopServ : shoppingListService) { }

    ngOnInit(): void {
        this.ingredients = this.shopServ.getIngredents();
        this.shopServ.ingredientChanged.subscribe((ing : Ingredient[])=>{
            this.ingredients= ing;
        })
    }

}
