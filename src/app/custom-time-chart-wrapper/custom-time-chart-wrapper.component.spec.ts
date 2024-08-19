import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTimeChartWrapperComponent } from './custom-time-chart-wrapper.component';

describe('CustomTimeChartWrapperComponent', () => {
  let component: CustomTimeChartWrapperComponent;
  let fixture: ComponentFixture<CustomTimeChartWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTimeChartWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTimeChartWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
