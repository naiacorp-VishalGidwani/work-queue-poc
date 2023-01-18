import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkQueueComponent } from "./work-queue/work-queue.component";
import { WorkQueuePocFormComponent } from './work-queue-poc-form/work-queue-poc-form.component';

const routes: Routes = [
  //{ path: 'timely-filing-work-queue', component: WorkQueueComponent },
  { path: 'timely-filing-work-queue', component: WorkQueuePocFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }
