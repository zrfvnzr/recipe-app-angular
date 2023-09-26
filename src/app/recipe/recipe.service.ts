import { Injectable } from "@angular/core";
import { RecipeModel } from "../models/recipe.model";

@Injectable({providedIn: 'root'})
export class RecipeService {

    recipes: RecipeModel[] = [
        new RecipeModel(1, 'Recipe1', 'Recipe1 description', 'https://picsum.photos/id/1/100/100', ['Meat', 'Vegetables']),
        new RecipeModel(2, 'Recipe2', 'Recipe2 description', 'https://picsum.photos/id/2/100/100', []),
        new RecipeModel(3, 'Recipe3', 'Recipe3 description', 'https://picsum.photos/id/3/100/100', [])
    ];

}