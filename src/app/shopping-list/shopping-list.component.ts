import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    ingredients: Ingredient[] = [];

    constructor() { }

    getNewIngredient(event: Ingredient) {
        this.ingredients.push(event);
        localStorage.setItem("APP-INGREDENTS-LIST", JSON.stringify(this.ingredients))
    }

    ngOnInit(): void {
        if (localStorage.getItem("APP-INGREDENTS-LIST") !== null) {
            const data = JSON.parse(localStorage.getItem("APP-INGREDENTS-LIST"));
            if (data.length > 0) {
                this.ingredients = data
            }
        } else {
            localStorage.setItem("APP-INGREDENTS-LIST", "")
        }
    }

}
