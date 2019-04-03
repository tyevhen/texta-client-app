import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DatasetService } from '../../services/dataset.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-dataset-viewer',
  templateUrl: './dataset-viewer.component.html',
  styleUrls: ['./dataset-viewer.component.scss']
})
export class DatasetViewerComponent implements OnInit {

  @Input() datasetId;
  @Input() datasetName;
  @Input() formDataToSubmit;

  dataFetchInProgress = false;
  datasetFetchInProgress = false;

  datasets: any = [];
  activeDataset: any;
  columnNames: any;
  datarowDeleteInfo: any;

  constructor(
    private dataService: DataService,
    private datasetService: DatasetService,
    public modalService: NgxSmartModalService
  ) {
    this.dataFetchInProgress = true;
    this.changeDatasets(this.datasetService.listDatasets());
    this.datasetService.datasetsChallenge$.subscribe(
      datasets => {
        this.changeDatasets(datasets);
        this.dataFetchInProgress = false;
      }
    );
  }

  ngOnInit() {}

  // setState methods //
  changeDatasets(datasets) {
    this.datasets = datasets;
  }

  setActiveDataset(dataset) {
    this.activeDataset = dataset;
  }
  // ================ //

  // Action handlers //
  handleDatasetChange(event) {
    this.datasetFetchInProgress = true;
    this.getDatasetById(event);
  }

  handleCreateDataset(event) {
    this.datasetName = event;
    this.datasetService.postDataset(this.datasetName);
  }

  handleDeleteDatarow(event) {
    this.openConfirmModal();
    this.datarowDeleteInfo = {
      datarowId: event.rowId,
      datasetId: event.setId
    };
  }

  handleUploadDatarows(event) {
    this.datasetService.uploadDatarows(event.datasetId, event.dataset);
  }

  getDatasetById(datasetId) {
    this.datasetFetchInProgress = true;
    this.setActiveDataset(this.datasetService.getDataset(datasetId));
    this.datasetService.datasetChallenge$.subscribe(
      dataset => {
        this.setActiveDataset(dataset);
        this.columnNames = this.getColumnNames();
        this.datasetFetchInProgress = false;
      }
    );
    this.datasetService.listDatasets();
  }

  openConfirmModal() {
    this.modalService.getModal('confirmRowDelete').open();
  }

  closeConfirmModal() {
    this.modalService.getModal('confirmRowDelete').close();
  }

  onConfirmDeleteDatarow() {
    this.datasetService.deleteDatarow(this.datarowDeleteInfo.datarowId, this.datarowDeleteInfo.datasetId);
    this.closeConfirmModal();
    this.getDatasetById(this.datarowDeleteInfo.datasetId);
    this.datarowDeleteInfo = {};
  }

  // Helper methods //
  isActiveDatasetEmpty() {
    return this.activeDataset.rows.length === 0;
  }

  getColumnNames() {
    return !this.isActiveDatasetEmpty() ? Object.keys(this.activeDataset.rows[0].content) : null;
  }
  // =============== //
}
