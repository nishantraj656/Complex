import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { routing } from './flatOwner.routing';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [FormComponent, ListComponent, ShowComponent]
})
export class FlatOwnerModule { }
