
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent{

    users:any[] = [];

    constructor(private hc:HttpClient){

    }

    getDataFromServer(){
        this.hc.get("https://jsonplaceholder.typicode.com/users").subscribe((data)=>{
            this.users = <any[]>data;
        })
    }
    
}
