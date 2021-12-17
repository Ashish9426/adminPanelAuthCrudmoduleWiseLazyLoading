import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { OrdermenuComponent } from './ordermenu/ordermenu.component';
import { OrdernowComponent } from './ordernow/ordernow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OrdermenuComponent, OrdernowComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ComponentsModule { }
