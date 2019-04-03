import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetViewerTableComponent } from './dataset-viewer-table.component';

describe('DatasetViewerTableComponent', () => {
  let component: DatasetViewerTableComponent;
  let fixture: ComponentFixture<DatasetViewerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetViewerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetViewerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
