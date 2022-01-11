import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
    selector: 'student-insert',
    templateUrl: './student-insert.component.html'
})
export class StudentInsertComponent{

    s = new Student();

    constructor(private hc:HttpClient){

    }

    save(){
        this.hc.post("https://basicstudentapp.herokuapp.com/students/insertStudent",this.s).subscribe(
            (data)=>{
                alert("insertion success");
            },(error)=>{
                alert("insertion failed");
            },
        )
    }

}