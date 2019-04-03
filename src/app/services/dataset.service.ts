import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService} from './data.service';

const BASE_URL = 'http://localhost:8000/dataset/';

@Injectable()
export class DatasetService {

  private datasetsList = new Subject();
  private dataset = new Subject();

  datasetsChallenge$ = this.datasetsList.asObservable();
  datasetChallenge$ = this.dataset.asObservable();

  constructor(private dataService: DataService) {}

  public listDatasets() {
    return this.dataService.get(BASE_URL).subscribe(
      response => this.datasetsList.next(response),
      error => error,
    );
  }

  public getDataset(datasetId) {
    const url = BASE_URL.concat(datasetId);
    return this.dataService.get(url).subscribe(
      response => this.dataset.next(response),
      error => error,
    );
  }

  public postDataset(datasetName) {
    return this.dataService.post(BASE_URL, { dataset_name: datasetName })
      .subscribe(
        response => response,
        error => error,
        () => this.listDatasets()
      );
  }

  public deleteDatarow(datarowId, datasetId) {
    const url = BASE_URL.concat(`${datasetId}/datarow/${datarowId}`);
    return this.dataService.delete(url).subscribe(
      response => response,
      error => error,
      () => this.getDataset(datasetId)
    );
  }

  public uploadDatarows(datasetId, formData) {
    const url = BASE_URL.concat(`${datasetId}/upload`);
    return this.dataService.postFile(url, formData).subscribe(
      response => response,
      error => error,
      () => this.getDataset(datasetId)
      );
  }
}
