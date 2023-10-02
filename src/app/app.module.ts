import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeCreateOrEditComponent } from './recipe/recipe-create-or-edit/recipe-create-or-edit.component';
import { RecipeIndexComponent } from './recipe/recipe-index/recipe-index.component';
import { RecipeItemComponent } from './recipe/recipe-index/recipe-item/recipe-item.component';
import { RecipeShowComponent } from './recipe/recipe-show/recipe-show.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';

@NgModule({
    declarations: [
        AppComponent,
        RecipeComponent,
        ShoppingListComponent,
        HeaderComponent,
        RecipeCreateOrEditComponent,
        RecipeIndexComponent,
        RecipeItemComponent,
        RecipeShowComponent,
        AuthComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
