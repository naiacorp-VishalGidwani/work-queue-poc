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
    {field: 'FIRST NAME', generateFakeData: faker.name.firstName},
    {field: 'LAST NAME', generateFakeData: faker.name.lastName},
    {
      field: 'DOB', generateFakeData: faker.date.birthdate, valueFormatter: (data: any): string => {
        return data.value.toLocaleDateString()
      }
    },
    {
      field: 'DATE OF SERVICE', generateFakeData: faker.date.recent, valueFormatter: (data: any): string => {
        return data.value.toLocaleDateString()
      }
    },
    {
      field: 'PAYER', generateFakeData: () => {
        return 'Medicaid'
      }
    },
    {
      field: 'TIMELY FILING WINDOW', generateFakeData: faker.date.future, valueFormatter: (data: any): string => {
        return data.value.toLocaleDateString()
      }
    },
    {
      field: 'IS BILLING MESSAGE', generateFakeData: () => {
        return 'Yes'
      }
    },
    {
      field: 'SUPERBILL BILLING STATUS', generateFakeData: () => {
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
    this.columnDefs = this.availableColumns.map(ac => (
      {
        field: ac.field,
        valueFormatter: ac.valueFormatter,
        filter: true
      }
    ));
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
