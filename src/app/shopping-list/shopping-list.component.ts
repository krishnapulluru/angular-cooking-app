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

    ngOnInit(): void {
        if (localStorage.getItem("APP-INGREDENTS-LIST") !== null) {
            let data = JSON.parse(localStorage.getItem("APP-INGREDENTS-LIST"));
            data.forEach(element => {
                this.ingredients.push(new Ingredient(element.id, element.itemName, element.itemAmount))
            });

        } else {
            localStorage.setItem("APP-INGREDENTS-LIST", "")
        }
    }

}
