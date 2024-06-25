import { NgModule } from "@angular/core";
import { HeaderComponent } from "./app/components/header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";

@NgModule({
    declarations:[AppComponent, HeaderComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule]
})
export class AppModule{

} 