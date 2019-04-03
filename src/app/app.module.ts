import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DatasetViewerComponent } from './components/dataset-viewer/dataset-viewer.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { DatasetViewerSidebarComponent } from './components/dataset-viewer/dataset-viewer-sidebar/dataset-viewer-sidebar.component';
import { DatasetViewerTableComponent } from './components/dataset-viewer/dataset-viewer-table/dataset-viewer-table.component';
import { DatasetService } from './services/dataset.service';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  declarations: [
    AppComponent,
    DatasetViewerComponent,
    DatasetViewerSidebarComponent,
    DatasetViewerTableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [
    DataService,
    DatasetService
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
