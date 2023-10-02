import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

    constructor(
        private recipeService: RecipeService
    ) { }

    ngOnInit(): void {
    }

    @Input() message: string;

    closeError() {
        this.recipeService.error = null;
    }
}
