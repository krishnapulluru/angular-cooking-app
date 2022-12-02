import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipes.service';
import { Recipe } from './recipies.modal';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css'],
    providers: [RecipeService]
})

export class RecipesComponent implements OnInit {

    recipeDetail: Recipe;

    constructor(private recipeService: RecipeService) { }

    ngOnInit(): void {
        this.recipeService.recipeSelected.subscribe((recipe : Recipe)=>{
            this.recipeDetail = recipe
        })
    }


}
