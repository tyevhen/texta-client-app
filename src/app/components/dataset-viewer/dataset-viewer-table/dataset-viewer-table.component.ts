import {Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dataset-viewer-table',
  templateUrl: './dataset-viewer-table.component.html',
  styleUrls: ['./dataset-viewer-table.component.scss']
})
export class DatasetViewerTableComponent implements OnInit {

  @Input() datasetName = null;
  @Input() datasetRows = null;
  @Input() columnNames = null;
  @Input() datasetId = null;

  @Output() deleteDatarow = new EventEmitter();
  @Output() uploadDatarows = new EventEmitter();

  fileToUpload: File = null;

  constructor() { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
  }

  constructFormDataObject() {
    const formData = new FormData();
    if (this.fileToUpload) {
      formData.append('file', this.fileToUpload);
    }
    return formData;
  }

  constructFileUploadObject() {
    return {datasetId: this.datasetId, dataset: this.constructFormDataObject()};
  }
}
