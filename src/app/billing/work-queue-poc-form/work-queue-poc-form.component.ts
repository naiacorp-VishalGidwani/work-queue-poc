import { Component } from '@angular/core';

import { FORM_DATA, formData } from './constants';

@Component({
  selector: 'app-work-queue-poc-form',
  templateUrl: './work-queue-poc-form.component.html',
  styleUrls: ['./work-queue-poc-form.component.scss']
})
export class WorkQueuePocFormComponent {
  formData: formData[] = FORM_DATA;
}
