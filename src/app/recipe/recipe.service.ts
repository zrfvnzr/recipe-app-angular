import { Injectable } from "@angular/core";
import { RecipeModel } from "../models/recipe.model";
import { ActivatedRoute, Router } from "@angular/router";
import { IngredientModel } from "../models/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class RecipeService {

    constructor(
        private router: Router,
        private currentRoute: ActivatedRoute,
        private http: HttpClient,
        private shoppingListService: ShoppingListService
    ) {
        this.indexRecipe(); // temp
    }

    backendURL: string = 'http://localhost:8080';

    recipes: RecipeModel[] = []

    indexRecipe() {
        // console.log(JSON.stringify(this.recipes[0].ingredients)); // debug
        this.http.get(`${this.backendURL}/api/recipes`).subscribe({
            next: (response: any[]) => {
                for (let recipe of response) {
                    recipe.ingredients = JSON.parse(recipe.ingredients);
                }
                this.recipes = response;
            },
            error: (error) => {
                alert(error.error);
            }
        });
    }

    createRecipe(recipe: RecipeModel) {
        this.http.post(`${this.backendURL}/api/recipes`, this.formatRecipe(recipe)).subscribe({
            next: () => {
                this.indexRecipe();
            },
            error: (error) => {
                alert(error.error);
            }
        });
        this.router.navigate(['/recipes'], {relativeTo: this.currentRoute});
    }

    deleteRecipe(id: number) {
        this.http.delete(`${this.backendURL}/api/recipes/${id}`).subscribe({
            next: () => {
                this.indexRecipe();
            },
            error: (error) => {
                alert(error);
            }
        });
        this.router.navigate(['/recipes'], {relativeTo: this.currentRoute});
    }

    editRecipe(index: number) {
        this.router.navigate([`/recipes/${index}/edit`], {relativeTo: this.currentRoute});
    }

    updateRecipe(recipe: RecipeModel, id: number) {
        this.http.put(`${this.backendURL}/api/recipes/${id}`, this.formatRecipe(recipe)).subscribe({
            next: () => {
                this.indexRecipe();
            },
            error: (error) => {
                alert(error.error);
            }
        });
        this.router.navigate(['/recipes'], {relativeTo: this.currentRoute});
    }

    toShoppingList(recipe: RecipeModel) {
        this.shoppingListService.shoppingList.push(...recipe.ingredients);
        this.router.navigate(['shopping-list']);
    }

    formatRecipe(recipe: RecipeModel) {
        let formattedRecipe = JSON.parse(JSON.stringify(recipe));
        formattedRecipe.ingredients = JSON.stringify(formattedRecipe.ingredients);
        return formattedRecipe;
    }

}