import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
    selector: 'student-update',
    templateUrl: './student-update.component.html'
})
export class StudentUpdateComponent{

    s = new Student();

    constructor(private hc:HttpClient){

    }

    update(){
        this.hc.put("https://basicstudentapp.herokuapp.com/students/updateStudent",this.s).subscribe(
            (data)=>{
                alert("update success");
            },(error)=>{
                alert("update failed");
            },
        )
    }

}