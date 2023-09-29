import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { RecipeModel } from 'src/app/models/recipe.model';
import { IngredientModel } from 'src/app/models/ingredient.model';

@Component({
    selector: 'app-recipe-create-or-edit',
    templateUrl: './recipe-create-or-edit.component.html',
    styleUrls: ['./recipe-create-or-edit.component.css']
})
export class RecipeCreateOrEditComponent implements OnInit {

    constructor(
        private recipeService: RecipeService,
        private router: Router,
        private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.currentRoute.params
            .subscribe((params: Params) => {
                this.editMode = params['id'] != null;
                this.editIndex = this.editMode ? params['id'] : null;
                this.initForm();
            });
    }

    initForm() {
        this.recipeFormModel = this.editMode ? this.recipeService.recipes[this.editIndex] : new RecipeModel(0, '', '', '', []);
    }

    editMode: boolean = false;
    editIndex: number;
    recipeFormModel: RecipeModel;

    onSubmit(form: NgForm) {
        form.value.ingredients = this.recipeFormModel.ingredients;
        if (this.editMode) {
            this.recipeService.updateRecipe(form.value, this.recipeFormModel.id);
        } else {
            this.recipeService.createRecipe(form.value);
        }
    }

    onCancel() {
        this.router.navigate(['../'], {relativeTo: this.currentRoute});
    }

    addIngredient() {
        this.recipeFormModel.ingredients.push(new IngredientModel(0, '', 1));
    }

    deleteIngredient(index: number) {
        this.recipeFormModel.ingredients.splice(index, 1);
    }

}
