import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AgGridModule} from "ag-grid-angular";
import { ImageCellRendererComponent } from './image-cell-renderer/image-cell-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageCellRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
