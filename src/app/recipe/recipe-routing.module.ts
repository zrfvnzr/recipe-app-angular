import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeCreateOrEditComponent } from "./recipe-create-or-edit/recipe-create-or-edit.component";
import { RecipeShowComponent } from "./recipe-show/recipe-show.component";
import { RecipeComponent } from "./recipe.component";

const routes: Routes = [
    { path: '', component: RecipeComponent, children: [
        { path: '', component: RecipeShowComponent },
        { path: 'new', component: RecipeCreateOrEditComponent },
        { path: ':id', component: RecipeShowComponent },
        { path: ':id/edit', component: RecipeCreateOrEditComponent }
    ]}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RecipeRoutingModule {}