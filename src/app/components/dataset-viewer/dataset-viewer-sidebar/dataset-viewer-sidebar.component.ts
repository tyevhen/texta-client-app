import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dataset-viewer-sidebar',
  templateUrl: './dataset-viewer-sidebar.component.html',
  styleUrls: ['./dataset-viewer-sidebar.component.scss']
})
export class DatasetViewerSidebarComponent implements OnInit {

  dataset: any;
  newDatasetName = '';

  @Input() viewState: any;
  @Output() datasetId = new EventEmitter();
  @Output() datasetName = new EventEmitter();

  @HostListener('datasetName')
  onDatasetNamesubmit() {
    this.newDatasetName = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
