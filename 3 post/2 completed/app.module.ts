import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { StudentListComponent } from "./student-list.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { StudentInsertComponent } from './student-insert.component';
@NgModule({
    declarations: [ AppComponent, StudentListComponent,StudentInsertComponent ],
    imports: [ BrowserModule,HttpClientModule,FormsModule ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}