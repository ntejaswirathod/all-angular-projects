import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports:[BrowserModule,HttpClientModule],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}