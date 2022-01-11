import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about.component';
import { AppComponent }  from './app.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { RouterModule } from "@angular/router";
import { StudentModule } from './student/student.module';
import { EmployeeModule } from './employee/employee.module';
import { PageNotFoundComponent } from './page-notf-found.component';
let rules = [
    {"path":"home","component":HomeComponent},
    {"path":"contact","component":ContactComponent},
    {"path":"about","component":AboutComponent},
    {"path":"","component":HomeComponent},
    {"path":"**","component":PageNotFoundComponent},
]

@NgModule({
    declarations: [ AppComponent,HomeComponent,ContactComponent,AboutComponent,PageNotFoundComponent],
    imports: [ BrowserModule, StudentModule ,EmployeeModule,RouterModule.forRoot(rules),RouterModule ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}