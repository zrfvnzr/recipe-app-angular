import { Injectable } from "@angular/core";
import { IngredientModel } from "../models/ingredient.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    
    constructor(
        private http: HttpClient
    ) {
        this.indexIngredient();
    }

    clearForm = new Subject<void>();

    shoppingList: IngredientModel[] = [];

    backendURL:string = 'http://localhost:8080/api/ingredients';

    showError = new Subject<string>();

    indexIngredient() {
        this.http.get(this.backendURL).subscribe({
            next: (response: any[]) => {
                this.shoppingList = response;
            },
            error: (error) => {
                console.error(error.error);
                this.showError.next('Error on retrieving shopping list');
            }
        });
    }

    storeIngredient(ingredient: IngredientModel) {
        this.http.post(this.backendURL, ingredient).subscribe({
            next: () => {
                this.clearForm.next();
                this.indexIngredient();
            },
            error: (error) => {
                console.error(error.error);
            }
        });
    }

    deleteIngredient(id: number) {
        this.http.delete(`${this.backendURL}/${id}`).subscribe({
            next: () => {
                this.indexIngredient();
            },
            error: (error) => {
                console.error(error.error);
            }
        });
    }

    updateIngredient(ingredient: IngredientModel, id: number) {
        this.http.put(`${this.backendURL}/${id}`, ingredient).subscribe({
            next: () => {
                this.clearForm.next();
                this.indexIngredient();
            },
            error: (error) => {
                console.error(error.error);
            }
        });
    }

}