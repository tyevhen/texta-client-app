import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetViewerSidebarComponent } from './dataset-viewer-sidebar.component';

describe('DatasetViewerSidebarComponent', () => {
  let component: DatasetViewerSidebarComponent;
  let fixture: ComponentFixture<DatasetViewerSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetViewerSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetViewerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
