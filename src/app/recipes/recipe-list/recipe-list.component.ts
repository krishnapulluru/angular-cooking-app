import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipies.modal';
@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe("A Test Recipe", "Simply a test recipe test", "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg?20170213105318"),
        new Recipe("A Test Recipe", "Simply a test recipe test", "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg?20170213105318"),
        new Recipe("A Test Recipe", "Simply a test recipe test", "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg?20170213105318"),
        new Recipe("A Test Recipe", "Simply a test recipe test", "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg?20170213105318"),
        new Recipe("A Test Recipe", "Simply a test recipe test", "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg?20170213105318")
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
