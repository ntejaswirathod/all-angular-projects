import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about.component';
import { AppComponent }  from './app.component';
import { ContactComponent } from './contact.component';
import { HomeComponent } from './home.component';
import { RouterModule } from "@angular/router";
let rules = [
    {"path":"home","component":HomeComponent},
    {"path":"contact","component":ContactComponent},
    {"path":"about","component":AboutComponent},
]

@NgModule({
    declarations: [ AppComponent,HomeComponent,ContactComponent,AboutComponent],
    imports: [ BrowserModule,RouterModule.forRoot(rules),RouterModule ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}