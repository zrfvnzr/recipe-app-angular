import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class RecipeService {

    recipes = [
        'Recipe1', 'Recipe2'
    ];

}