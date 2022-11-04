import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipies.modal';
@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelectedEvent = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe("A Test Recipe", "Simply a test recipe test", "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg?20170213105318"),
        new Recipe("A Test Recipe1", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book ", "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg")
    ];

    constructor() { }

    ngOnInit(): void {
    }
    recipeWasSelected(event: Recipe) {
        this.recipeWasSelectedEvent.emit(event);
    }
}
