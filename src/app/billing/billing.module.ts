import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { BillingComponent } from './billing.component';
import { WorkQueueComponent } from './work-queue/work-queue.component';
import {AgGridModule} from "ag-grid-angular";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BillingComponent,
    WorkQueueComponent
  ],
    imports: [
        CommonModule,
        BillingRoutingModule,
        AgGridModule,
        FormsModule
    ]
})
export class BillingModule { }
