import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { WorkQueueComponent } from './work-queue/work-queue.component';
import {AgGridModule} from "ag-grid-angular";
import {FormsModule} from "@angular/forms";
import { WorkQueuePocFormComponent } from './work-queue-poc-form/work-queue-poc-form.component';


@NgModule({
  declarations: [
    WorkQueueComponent,
    WorkQueuePocFormComponent
  ],
    imports: [
        CommonModule,
        BillingRoutingModule,
        AgGridModule,
        FormsModule
    ]
})
export class BillingModule { }
