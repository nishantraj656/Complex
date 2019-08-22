import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { routing } from './super-admin.routing';
import { PagesModule } from '../pages/pages.module';
import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './item/item.component';
import { ComplexComponent } from './complex/complex.component';
import { FacilityComponent } from './facility/facility.component';
import { AssociationDetailsComponent } from './association-details/association-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    routing,
    LayoutModule,
    SharedModule,
    FormsModule
  ],
  declarations: [MainComponent, ItemComponent, ComplexComponent, FacilityComponent, AssociationDetailsComponent]
})
export class SuperAdminModule { }
