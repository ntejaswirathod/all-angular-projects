import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { StudentListComponent } from "./student-list.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [ AppComponent, StudentListComponent ],
    imports: [ BrowserModule ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}