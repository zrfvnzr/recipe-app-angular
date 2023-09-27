import { Injectable } from "@angular/core";
import { RecipeModel } from "../models/recipe.model";
import { ActivatedRoute, Router } from "@angular/router";
import { IngredientModel } from "../models/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({providedIn: 'root'})
export class RecipeService {

    constructor(
        private router: Router,
        private currentRoute: ActivatedRoute,
        private shoppingListService: ShoppingListService
    ) {}

    recipes: RecipeModel[] = [
        new RecipeModel(1, 'Recipe1', 'Recipe1 description', 'https://picsum.photos/id/1/100/100', [
            new IngredientModel('Meat', 10)
        ]),
        new RecipeModel(2, 'Recipe2', 'Recipe2 description', 'https://picsum.photos/id/2/100/100', []),
        new RecipeModel(3, 'Recipe3', 'Recipe3 description', 'https://picsum.photos/id/3/100/100', [])
    ];

    createRecipe(recipe: RecipeModel) {
        this.recipes.push(recipe);
        this.router.navigate(['/recipes'], {relativeTo: this.currentRoute});
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.router.navigate(['/recipes'], {relativeTo: this.currentRoute});
    }

    editRecipe(index: number) {
        this.router.navigate([`/recipes/${index}/edit`], {relativeTo: this.currentRoute});
    }

    updateRecipe(recipe: RecipeModel, index: number) {
        this.recipes[index] = recipe;
        this.router.navigate(['/recipes'], {relativeTo: this.currentRoute});
    }

    toShoppingList(recipe: RecipeModel) {
        this.shoppingListService.shoppingList.push(...recipe.ingredients);
        this.router.navigate(['shopping-list']);
    }

}