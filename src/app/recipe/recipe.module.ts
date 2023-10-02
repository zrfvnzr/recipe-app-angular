import { NgModule } from "@angular/core";
import { RecipeComponent } from "./recipe.component";
import { RecipeCreateOrEditComponent } from "./recipe-create-or-edit/recipe-create-or-edit.component";
import { RecipeIndexComponent } from "./recipe-index/recipe-index.component";
import { RecipeItemComponent } from "./recipe-index/recipe-item/recipe-item.component";
import { RecipeShowComponent } from "./recipe-show/recipe-show.component";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        RecipeComponent,
        RecipeCreateOrEditComponent,
        RecipeIndexComponent,
        RecipeItemComponent,
        RecipeShowComponent
    ],
    imports: [
        FormsModule,
        AppRoutingModule,
        CommonModule
    ],
    exports: [
        RecipeComponent,
        RecipeCreateOrEditComponent,
        RecipeIndexComponent,
        RecipeItemComponent,
        RecipeShowComponent
    ]
})
export class RecipeModule {
    
}