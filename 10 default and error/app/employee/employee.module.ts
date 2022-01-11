import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeInsertComponent } from './employee-insert.component';
import { RouterModule } from '@angular/router';

let empRules = [
    {"path":"employeeInsert","component":EmployeeInsertComponent}
]

@NgModule({
    imports: [ CommonModule,RouterModule.forChild(empRules) ],
    declarations : [EmployeeInsertComponent]
})
export class EmployeeModule {}