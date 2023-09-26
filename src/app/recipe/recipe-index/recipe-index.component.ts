import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-recipe-index',
    templateUrl: './recipe-index.component.html',
    styleUrls: ['./recipe-index.component.css']
})
export class RecipeIndexComponent implements OnInit {

    constructor(
        private router: Router,
        private currentRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
    }

    createRecipe() {
        this.router.navigate(['new'], {relativeTo: this.currentRoute});
    }

}
