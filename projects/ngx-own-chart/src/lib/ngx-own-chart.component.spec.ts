import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOwnChartComponent } from './ngx-own-chart.component';

describe('NgxOwnChartComponent', () => {
  let component: NgxOwnChartComponent;
  let fixture: ComponentFixture<NgxOwnChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxOwnChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOwnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
