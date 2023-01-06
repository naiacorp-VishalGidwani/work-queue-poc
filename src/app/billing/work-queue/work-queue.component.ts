import {Component} from '@angular/core';
import {ColDef, GridReadyEvent} from "ag-grid-community";
import {faker} from "@faker-js/faker";
import * as moment from 'moment';
import {ImageCellRendererComponent} from "../../image-cell-renderer/image-cell-renderer.component";

@Component({
  selector: 'app-work-queue',
  templateUrl: './work-queue.component.html',
  styleUrls: ['./work-queue.component.scss']
})
export class WorkQueueComponent {

  readonly availableColumns = [
    {field: 'FIRST NAME', minWidth: 150, generateFakeData: faker.name.firstName},
    {field: 'LAST NAME', minWidth: 150, generateFakeData: faker.name.lastName},
    {
      field: 'DOB', minWidth: 100, generateFakeData: faker.date.birthdate, valueFormatter: (data: any): string => {
        return data.value.toLocaleDateString()
      }
    },
    {
      field: 'DATE OF SERVICE', minWidth: 100, generateFakeData: faker.date.recent, valueFormatter: (data: any): string => {
        return data.value.toLocaleDateString()
      }
    },
    {
      field: 'PAYER', minWidth: 100, generateFakeData: () => {
        return 'Medicaid'
      }
    },
    {
      field: 'TIMELY FILING WINDOW', minWidth: 100, generateFakeData: faker.date.future, valueFormatter: (data: any): string => {
        return data.value.toLocaleDateString()
      }
    },
    {
      field: 'IS BILLING MESSAGE', minWidth: 50, generateFakeData: () => {
        return 'Yes'
      }
    },
    {
      field: 'SUPERBILL BILLING STATUS', minWidth: 100, generateFakeData: () => {
        return 'Pending'
      }
    },
    {
      field: 'MSG TO CODER ',
      maxWidth: 75,
      cellRenderer: ImageCellRendererComponent,
      cellRendererParams: {
        iconFileName: 'mail.svg',
        title: 'Send Message to Coder'
      },
    },
    {
      field: 'ADD TO BB',
      maxWidth: 75,
      cellRenderer: ImageCellRendererComponent,
      cellRendererParams: {
        iconFileName: 'add_box.svg',
        title: 'Add to Billing Batch'
      },
    },
    {
      field: 'VIEW SB',
      maxWidth: 75,
      cellRenderer: ImageCellRendererComponent,
      cellRendererParams: {
        iconFileName: 'description.svg',
        title: 'View Superbill(s)'
      },
    }
  ];

  defaultColDef = {
    filter: 'agTextColumnFilter',
  };

  columnDefs: ColDef[];
  rowData: any[] = [];

  expiryStartDate;
  expiryEndDate;

  constructor() {
    this.expiryStartDate = moment().format('YYYY-MM-DD');
    this.expiryEndDate = moment().add(1, 'months').format('YYYY-MM-DD');

    this.columnDefs = this.availableColumns.map(ac => (
      {
        field: ac.field,
        valueFormatter: ac.valueFormatter,
        cellRenderer: ac.cellRenderer,
        cellRendererParams: ac.cellRendererParams,
        filter: !ac.cellRenderer,
        minWidth: ac.minWidth,
        maxWidth: ac.maxWidth
      }
    ));
    this.rowData = this.generateRowData(30);
  }

  generateRowData(rowCount: number): any[] {
    const rowData: any[] = [];
    for (let i = 0; i < rowCount; i++) {
      const row: any = {};
      this.availableColumns.forEach(ac => {
        if (ac.generateFakeData) {
          row[ac.field] = ac.generateFakeData();
        }
      })
      rowData.push(row);
    }

    // fixme: for testing only
    console.log('rowData', rowData);

    return rowData;
  }

  onGridReady($event: GridReadyEvent<any>) {
    $event.api.sizeColumnsToFit();
  }
}
