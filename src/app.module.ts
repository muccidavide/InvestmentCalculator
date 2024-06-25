import { NgModule } from "@angular/core";
import { HeaderComponent } from "./app/components/header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { FormsModule } from "@angular/forms";
import { UserInputComponent } from "./app/components/user-input/user-input.component";
import { InvestmentResultsComponent } from "./app/components/investment-results/investment-results.component";

@NgModule({
    declarations:[AppComponent, HeaderComponent, UserInputComponent, InvestmentResultsComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule, FormsModule]
})
export class AppModule{
    
} 