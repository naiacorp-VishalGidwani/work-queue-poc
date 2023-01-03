import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';
import { WorkQueueComponent } from './work-queue/work-queue.component';
import {AgGridModule} from "ag-grid-angular";


@NgModule({
  declarations: [
    BillingComponent,
    WorkQueueComponent
  ],
  imports: [
    CommonModule,
    BillingRoutingModule,
    AgGridModule
  ]
})
export class BillingModule { }
