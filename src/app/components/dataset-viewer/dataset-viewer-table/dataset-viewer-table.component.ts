import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';


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

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const scrollButton = document.getElementsByClassName('table-scroll-top-button')[0];
    if (window.scrollY > 120) {
      scrollButton.classList.add('visible');
    } else {
      scrollButton.classList.remove('visible');
    }
  }

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

  handleUploadFile() {
    const fileUploadObject = this.constructFileUploadObject();
    this.uploadDatarows.emit(fileUploadObject);
  }

  handleScrollTop() {
    document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
    // document.documentElement.scrollTop = 0;
  }
}
