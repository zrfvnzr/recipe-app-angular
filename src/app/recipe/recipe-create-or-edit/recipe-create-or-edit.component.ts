import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { RecipeModel } from 'src/app/models/recipe.model';

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
                this.editRecipe = this.editMode ? this.recipeService.recipes[params['id']] : null;
            });
    }

    editMode: boolean = false;
    editIndex: number;
    editRecipe: RecipeModel;

    onSubmit(form: NgForm, index?: number) {
        if (this.editMode) {
            this.recipeService.updateRecipe(form.value, index);
        } else {
            this.recipeService.createRecipe(form.value);
        }
    }

    onCancel() {
        this.router.navigate(['../'], {relativeTo: this.currentRoute});
    }

}
