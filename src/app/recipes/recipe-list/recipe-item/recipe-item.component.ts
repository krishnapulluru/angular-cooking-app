import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipies.modal';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})

export class RecipeItemComponent implements OnInit {
    @Output() recipeDetails = new EventEmitter<void>();
    @Input() recipe: Recipe;

    constructor() { }

    ngOnInit(): void {
    }

    upTheValues() {
        this.recipeDetails.emit()
    }

}
