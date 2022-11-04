import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipies.modal';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {

    recipeDetail: Recipe;

    constructor() { }

    ngOnInit(): void {
    }

    getRecipeDetails(event: Recipe) {
        this.recipeDetail = event;
    }

}
