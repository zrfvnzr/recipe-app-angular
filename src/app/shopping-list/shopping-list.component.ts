import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { IngredientModel } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { NgForm } from '@angular/forms';
import { AlertComponent } from '../alert/alert.component';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    constructor(
        public shoppingListService: ShoppingListService
    ) { }

    ngOnInit(): void {
        this.shoppingListService.clearForm
            .subscribe(() => {
                this.resetForm();
            });
        this.shoppingListService.showError
            .subscribe((message) => {
                this.showError(message);
            });
    }

    @ViewChild('form', {static: false}) form: NgForm;
    @ViewChild('error', {static: false, read: ViewContainerRef}) error: ViewContainerRef;

    ingredientFormModel: IngredientModel;
    editMode: boolean;
    editIngredientIndex: number;

    resetForm() {
        this.form.reset();
        this.editMode = false;
    }

    onSubmit(form: NgForm) {
        if (this.editMode) {
            const id = this.shoppingListService.shoppingList[this.editIngredientIndex].id;
            this.shoppingListService.updateIngredient(form.value, id);
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

    private showError(message: string) {
        this.error.clear();
        const alertRef = this.error.createComponent(AlertComponent);
        alertRef.instance.closeError = () => {
            this.error.clear();
        }
        alertRef.instance.message = message;
    }

}
