import { Component } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import {ICellRendererParams} from "ag-grid-community";

@Component({
  selector: 'app-image-cell-renderer',
  templateUrl: './image-cell-renderer.component.html',
  styleUrls: ['./image-cell-renderer.component.scss']
})
export class ImageCellRendererComponent implements ICellRendererAngularComp {
  params!: any;

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams<any>): boolean {
    this.params = params;
    return true;
  }

}
