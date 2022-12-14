import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../recipes.service';
import { Recipe } from '../recipies.modal';
@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];

    constructor(private recipeService: RecipeService) { }

    ngOnInit(): void {
        this.recipes = this.recipeService.getRecipes();
    }
}
