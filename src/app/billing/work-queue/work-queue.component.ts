import {Component} from '@angular/core';
import {ColDef, GridReadyEvent} from "ag-grid-community";
import * as moment from 'moment';
import {DATE_FORMAT, DEFAULT_COL_DEF, TIMELY_FILING_WORK_QUEUE_COL_DEF} from "./constants";
import {WorkQueueService} from "./work-queue.service";
import {WorkQueueRequest, WorkQueueResponse} from "./types";

@Component({
  selector: 'app-work-queue',
  templateUrl: './work-queue.component.html',
  styleUrls: ['./work-queue.component.scss']
})
export class WorkQueueComponent {
  defaultColDef = DEFAULT_COL_DEF;
  columnDefs: ColDef[] = TIMELY_FILING_WORK_QUEUE_COL_DEF;

  filingExpiryStartDate: string;
  filingExpiryEndDate: string;

  rowData: Record<string, any>[] = [];

  constructor(private workQueueService: WorkQueueService) {
    this.filingExpiryStartDate = moment().format(DATE_FORMAT);
    this.filingExpiryEndDate = moment().add(1, 'months').format(DATE_FORMAT);

    this.onFilterUpdate();
  }

  onFilterUpdate() {
    const request: WorkQueueRequest = {
      FilingExpiryStartDate: this.filingExpiryStartDate,
      FilingExpiryEndDate: this.filingExpiryEndDate,
      Fields: this.columnDefs.map(cd => cd.field || '')
    };

    this.workQueueService.getWorkQueue(request).subscribe({
      next: (res: WorkQueueResponse) => {
        this.rowData = res.Data;
      }
    })
  }

  onGridReady($event: GridReadyEvent) {
    $event.api.sizeColumnsToFit();
  }
}
