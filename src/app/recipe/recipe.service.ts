import { Injectable } from "@angular/core";
import { RecipeModel } from "../models/recipe.model";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class RecipeService {

    constructor(
        private router: Router,
        private currentRoute: ActivatedRoute
    ) {}

    recipes: RecipeModel[] = [
        new RecipeModel(1, 'Recipe1', 'Recipe1 description', 'https://picsum.photos/id/1/100/100', ['Meat', 'Vegetables']),
        new RecipeModel(2, 'Recipe2', 'Recipe2 description', 'https://picsum.photos/id/2/100/100', []),
        new RecipeModel(3, 'Recipe3', 'Recipe3 description', 'https://picsum.photos/id/3/100/100', [])
    ];

    createRecipe(recipe: RecipeModel) {
        this.recipes.push(recipe);
        this.router.navigate(['../'], {relativeTo: this.currentRoute});
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.router.navigate([''], {relativeTo: this.currentRoute});
    }

}