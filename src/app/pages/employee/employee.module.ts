import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeShowComponent } from './employee-show/employee-show.component';
import { routing } from './employee.routing';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,   
    SharedModule,
    routing,
  ],
  declarations: [ 
                  EmployeeComponent, 
                  EmployeeFormComponent,
                  EmployeeShowComponent
                  ]
})
export class EmployeeModule { }
