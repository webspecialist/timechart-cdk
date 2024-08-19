import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTimeChartComponent } from './custom-time-chart.component';

describe('CustomTimeChartComponent', () => {
  let component: CustomTimeChartComponent;
  let fixture: ComponentFixture<CustomTimeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTimeChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTimeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
