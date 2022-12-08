import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.modal";
import { shoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipies.modal";

@Injectable()
export class RecipeService {

    constructor(private shpListServ : shoppingListService){}
    recipeSelected = new EventEmitter<Recipe>;

    recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
              new Ingredient(new Date().getTime().toString(16) , 'Meat', 1 , new Date().toDateString()),
              new Ingredient(new Date().getTime().toString(16) ,'French Fries', 20 , new Date().toDateString())
            ]),
          new Recipe('Big Fat Burger',
            'What else you need to say?',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
              new Ingredient(new Date().getTime().toString(16) , 'Buns', 2 ,  new Date().toDateString()),
              new Ingredient(new Date().getTime().toString(16) ,'Meat', 1 , new Date().toDateString())
            ])
    ];

    getRecipes() {
        return this.recipes.slice()
    }

    addToShoppingListService(ingredents : Ingredient[]){
        this.shpListServ.addIngredentsFromRecipe(ingredents);
    }
}