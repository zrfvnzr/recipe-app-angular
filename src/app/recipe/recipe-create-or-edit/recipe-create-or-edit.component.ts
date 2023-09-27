import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

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
    }

    onSubmit(form: NgForm) {
        this.recipeService.createRecipe(form.value);
    }

    onCancel() {
        this.router.navigate(['../'], {relativeTo: this.currentRoute});
    }

}
