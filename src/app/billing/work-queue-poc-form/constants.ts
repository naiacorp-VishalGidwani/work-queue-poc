

export type formData = {
  Id: string;
  Name: string;
  Description: string;
  VisibleForRoles: any;
  Collections: any;
  Fields: any;
  Actions: any;
  Filters: any;
  }

export const FORM_DATA: formData[] = [
  {
    "Id": "123",
    "Name": "Billing WQ",
    "Description": "Work Queue for Billing Users",
    "VisibleForRoles": [
      "Administrator",
      "Manager"
    ],
    "Collections": [
      "CurrentBillings",
      "Patient"
    ],
    "Fields": [
      {
        "Collection": "CurrentBillings",
        "Field": "PatientFirstName",
        "Label": "FIRST NAME"
      },
      {
        "Collection": "CurrentBillings",
        "Field": "PatientLastName",
        "Label": "LAST NAME"
      },
      {
        "Collection": "CurrentBillings",
        "Field": "PatientDOB",
        "Label": "DOB"
      },
      {
        "Collection": "CurrentBillings",
        "Field": "EncounterDate",
        "Label": "DATE OF SERVICE"
      },
      {
        "Collection": "CurrentBillings",
        "Field": "PatientFirstName",
        "Label": "PAYER"
      },
      {
        "Collection": "CurrentBillings",
        "Field": "PatientFirstName",
        "Label": "TIMELY FILING WINDOW"
      },
      {
        "Collection": "CurrentBillings",
        "Field": "PatientFirstName",
        "Label": "IS BILLING MESSAGE"
      },
      {
        "Collection": "CurrentBillings",
        "Field": "BillingStatus",
        "Label": "SUPERBILL BILLING STATUS"
      }
    ],
    "Actions": [
      {
        "Label": "MSG",
        "Action": "SEND_MESSAGE_TO_CODER"
      },
      {
        "Label": "ADD",
        "Action": "ADD_TO_BILLING_BATCH"
      },
      {
        "Label": "VIEW",
        "Action": "VIEW_SUPERBILL"
      }
    ],
    "Filters": [
      {

      }
    ]
  }
  ]
