import { Component } from "@angular/core";

@Component({
    selector : "app-root",
    templateUrl : "app.component.html"
})
export class AppComponent{

    msg:string = "AbCd";

    price : number = 100;

    piValue : number = 22/7;

    today = new Date();

}