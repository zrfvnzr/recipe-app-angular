import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AlertComponent } from './alert/alert.component';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
    declarations: [
        AppComponent,
        ShoppingListComponent,
        HeaderComponent,
        AuthComponent,
        AlertComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RecipeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
