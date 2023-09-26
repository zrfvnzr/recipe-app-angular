import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { RecipeModel } from 'src/app/models/recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-recipe-show',
    templateUrl: './recipe-show.component.html',
    styleUrls: ['./recipe-show.component.css']
})
export class RecipeShowComponent implements OnInit {

    constructor(
        private recipeService: RecipeService,
        private router: Router,
        private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.currentRoute.params
            .subscribe(
                (params: Params) => {
                    this.index = params['id'];
                    this.recipe = this.recipeService.recipes[this.index];
                }
            );
    }

    recipe: RecipeModel = new RecipeModel(0, '', '', '', []);
    index: number = 0;

}
