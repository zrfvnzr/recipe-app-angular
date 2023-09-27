import { Injectable } from "@angular/core";
import { IngredientModel } from "../models/ingredient.model";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    
    clearForm = new Subject<void>();

    shoppingList: IngredientModel[] = [
        new IngredientModel('Meat', 10),
        new IngredientModel('Tomato', 5),
        new IngredientModel('Cabbage', 2)
    ];

    storeIngredient(ingredient: IngredientModel) {
        this.shoppingList.push(ingredient);
        this.clearForm.next();
    }

    deleteIngredient(index: number) {
        this.shoppingList.splice(index, 1);
    }

    updateIngredient(ingredient: IngredientModel, index: number) {
        this.shoppingList[index] = ingredient;
        this.clearForm.next();
    }

}