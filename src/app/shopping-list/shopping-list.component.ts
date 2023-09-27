import { Component, OnInit, ViewChild } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    @ViewChild('form', {static: false}) form: NgForm;

    constructor(
        public shoppingListService: ShoppingListService
    ) { }

    ngOnInit(): void {
        this.shoppingListService.clearForm
            .subscribe(() => {
                this.resetForm();
            })
    }

    resetForm() {
        this.form.reset();
        this.editMode = false;
    }

    ingredientFormModel: IngredientModel;
    editMode: boolean;
    editIngredientIndex: number;

    onSubmit(form: NgForm) {
        if (this.editMode) {
            this.shoppingListService.updateIngredient(form.value, this.editIngredientIndex)
        } else {
            this.shoppingListService.storeIngredient(form.value);
        }
        
    }

    editIngredient(index: number) {
        this.editMode = true;
        this.editIngredientIndex = index;
        const ingredient = this.shoppingListService.shoppingList[index];
        this.form.setValue(ingredient);
    }

}
