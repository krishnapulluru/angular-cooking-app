import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.modal';
import { RecipeService } from '../recipes.service';
import { Recipe } from '../recipies.modal';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    @Input() recipe: Recipe;
    constructor(private recipeService : RecipeService) { }

    ngOnInit(): void {
    }

    addToShoppningList(){
        this.recipeService.addToShoppingListService(this.recipe.ingredients)
    }

}
