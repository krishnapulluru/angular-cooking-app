import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../../recipes.service';
import { Recipe } from '../../recipies.modal';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit {
  
    @Input() recipe: Recipe;

    constructor(private recipeService : RecipeService) { }

    ngOnInit(): void {
    }

    upTheValues() {
       this.recipeService.recipeSelected.emit(this.recipe);
    }

}
