import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkQueueComponent} from "./work-queue/work-queue.component";

const routes: Routes = [
  { path: 'timely-filing-work-queue', component: WorkQueueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
