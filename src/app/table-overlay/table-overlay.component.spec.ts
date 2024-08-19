import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOverlayComponent } from './table-overlay.component';

describe('TableOverlayComponent', () => {
  let component: TableOverlayComponent;
  let fixture: ComponentFixture<TableOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
