import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student-list',
    templateUrl: './student-list.component.html'
})
export class StudentListComponent{

    students:any[] = [];

    constructor(private hc:HttpClient){
        this.hc.get("https://basicstudentapp.herokuapp.com/students/getAllStudents").subscribe(
            (data)=>{
                console.log(data);
                this.students = <any[]>data;
            },
            (error)=>{
                alert("data load failed")
            }
        );
    }	

}