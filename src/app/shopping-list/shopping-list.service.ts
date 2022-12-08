import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.modal";

export class shoppingListService {
    
    ingredientChanged = new EventEmitter <Ingredient[]>();

    private ingredients : Ingredient[]=[
        new Ingredient(new Date().getTime().toString(16),'apple' , 50 , new Date().toDateString()),
        new Ingredient(new Date().getTime().toString(16),'banana' ,20 ,new Date().toDateString())
    ];

    getIngredents(){
        return this.ingredients.slice();
    }

    addIngredent(ingredient : Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredentsFromRecipe(ingredient : Ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

}