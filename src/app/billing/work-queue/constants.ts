import {ImageCellRendererComponent} from "../../image-cell-renderer/image-cell-renderer.component";
import {ColDef} from "ag-grid-community";
import {faker} from "@faker-js/faker";
import {WorkQueueRequest} from "./types";
import * as moment from "moment";

export const DATE_FORMAT = 'YYYY-MM-DD';

export const DEFAULT_COL_DEF = {
  filter: 'agTextColumnFilter',
};
export const TIMELY_FILING_WORK_QUEUE_COL_DEF: ColDef[] = [
  {
    field: 'FIRST NAME',
    minWidth: 150,
  },
  {
    field: 'LAST NAME',
    minWidth: 150
  },
  {
    field: 'DOB',
    minWidth: 100,
    valueFormatter: (data: any): string => {
      return data.value.toLocaleDateString()
    }
  },
  {
    field: 'DATE OF SERVICE',
    minWidth: 100,
    valueFormatter: (data: any): string => {
      return data.value.toLocaleDateString()
    }
  },
  {
    field: 'PAYER',
    minWidth: 100,
  },
  {
    field: 'TIMELY FILING WINDOW',
    minWidth: 100,
    valueFormatter: (data: any): string => {
      return data.value.toLocaleDateString()
    }
  },
  {
    field: 'IS BILLING MESSAGE',
    minWidth: 50,
  },
  {
    field: 'SUPERBILL BILLING STATUS',
    minWidth: 100
  },
  {
    field: 'MSG',
    filter: false,
    maxWidth: 90,
    cellRenderer: ImageCellRendererComponent,
    cellRendererParams: {
      iconFileName: 'mail.svg',
      title: 'Send Message to Coder'
    },
  },
  {
    field: 'ADD',
    filter: false,
    maxWidth: 90,
    cellRenderer: ImageCellRendererComponent,
    cellRendererParams: {
      iconFileName: 'add_box.svg',
      title: 'Add to Billing Batch'
    },
  },
  {
    field: 'VIEW',
    filter: false,
    maxWidth: 100,
    cellRenderer: ImageCellRendererComponent,
    cellRendererParams: {
      iconFileName: 'description.svg',
      title: 'View Superbill(s)'
    },
  }
];
export const TIMELY_FILING_MOCK_DATA_GENERATORS: Record<string, (request: WorkQueueRequest) => any> = {
  'FIRST NAME': () => {
    return faker.name.firstName()
  },
  'LAST NAME': () => {
    return faker.name.lastName()
  },
  'DOB': () => {
    return faker.date.birthdate()
  },
  'DATE OF SERVICE': (request: WorkQueueRequest) => {
    return faker.date.between(moment(request.ExpiryEndDate).subtract(1, "month").format('YYYY-MM-DD'), request.ExpiryEndDate);
  },
  'PAYER': () => {
    return 'Medicaid';
  },
  'TIMELY FILING WINDOW': (request: WorkQueueRequest) => {
    return faker.date.between(request.ExpiryEndDate, moment(request.ExpiryEndDate).add(1, "month").format(DATE_FORMAT));
  },
  'IS BILLING MESSAGE': () => {
    return 'Yes'
  },
  'SUPERBILL BILLING STATUS': () => {
    return 'Pending'
  }
}
