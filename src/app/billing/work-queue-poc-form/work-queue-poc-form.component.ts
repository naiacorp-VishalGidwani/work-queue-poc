import {Component} from '@angular/core';

import {FORM_DATA, formData} from './constants';

@Component({
  selector: 'app-work-queue-poc-form',
  templateUrl: './work-queue-poc-form.component.html',
  styleUrls: ['./work-queue-poc-form.component.scss']
})
export class WorkQueuePocFormComponent {
  formData: formData[] = FORM_DATA;

  selectedRoles: any = [];
  selectedCollections: any = [];
  selectedFields: any = [];
  selectedActions: any = [];

  onRoleClicked(type: string, role: string) {
    if (type === 'available') {
      if (!this.selectedRoles.includes(role)) {
        this.selectedRoles.push(role);
      }
    } else {
      this.selectedRoles.splice(this.selectedRoles.indexOf(role), 1);
    }
  }

  onCollectionClicked(type: string, role: string){
    if (type === 'available') {
      if (!this.selectedCollections.includes(role)) {
        this.selectedCollections.push(role);
      }
    } else {
      this.selectedCollections.splice(this.selectedCollections.indexOf(role), 1);
    }
  }

  onFieldClicked(type: string, role: string){
    if (type === 'available') {
      if (!this.selectedFields.includes(role)) {
        this.selectedFields.push(role);
      }
    } else {
      this.selectedFields.splice(this.selectedFields.indexOf(role), 1);
    }
  }

  onActionClicked(type: string, role: string){
    if (type === 'available') {
      if (!this.selectedActions.includes(role)) {
        this.selectedActions.push(role);
      }
    } else {
      this.selectedActions.splice(this.selectedActions.indexOf(role), 1);
    }
  }
}
