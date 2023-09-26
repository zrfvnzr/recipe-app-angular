import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeShowComponent } from "./recipe/recipe-show/recipe-show.component";
import { RecipeCreateOrEditComponent } from "./recipe/recipe-create-or-edit/recipe-create-or-edit.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipeComponent, children: [
        { path: '', component: RecipeShowComponent },
        { path: 'new', component: RecipeCreateOrEditComponent },
        { path: ':id', component: RecipeShowComponent },
        { path: ':id/edit', component: RecipeCreateOrEditComponent }
    ]},
    { path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}