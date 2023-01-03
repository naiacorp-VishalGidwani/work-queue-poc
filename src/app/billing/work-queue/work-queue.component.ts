import {Component} from '@angular/core';
import {ColDef} from "ag-grid-community";
import {faker} from "@faker-js/faker";

@Component({
  selector: 'app-work-queue',
  templateUrl: './work-queue.component.html',
  styleUrls: ['./work-queue.component.scss']
})
export class WorkQueueComponent {

  readonly availableColumns = [
    {field: 'First Name', generateFakeData: faker.name.firstName},
    {field: 'Last Name', generateFakeData: faker.name.lastName},
    {
      field: 'DOB', generateFakeData: faker.date.birthdate, valueFormatter: (data: any): string => {
        return data.value.toLocaleDateString()
      }
    },
    {
      field: 'Date of Service', generateFakeData: faker.date.recent, valueFormatter: (data: any): string => {
        return data.value.toLocaleDateString()
      }
    },
    {
      field: 'Payer', generateFakeData: () => {
        return 'Medicaid'
      }
    },
    {
      field: 'Timely Filing Window', generateFakeData: faker.date.future, valueFormatter: (data: any): string => {
        return data.value.toLocaleDateString()
      }
    },
    {
      field: 'Is Billing Message', generateFakeData: () => {
        return 'Yes'
      }
    },
    {
      field: 'Superbill Billing Status', generateFakeData: () => {
        return 'Pending'
      }
    },
  ];

  defaultColDef = {
    filter: 'agTextColumnFilter',
  };

  columnDefs: ColDef[];
  rowData: any[] = [];

  constructor() {
    this.columnDefs = this.availableColumns.map(ac => ({field: ac.field, valueFormatter: ac.valueFormatter}));
    this.rowData = this.generateRowData(30);
  }

  generateRowData(rowCount: number): any[] {
    const rowData: any[] = [];
    for (let i = 0; i < rowCount; i++) {
      const row: any = {};
      this.availableColumns.forEach(ac => {
        row[ac.field] = ac.generateFakeData();
      })
      rowData.push(row);
    }

    // fixme: for testing only
    console.log('rowData', rowData);

    return rowData;
  }

}
