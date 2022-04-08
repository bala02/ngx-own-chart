import { TestBed } from '@angular/core/testing';

import { NgxOwnChartService } from './ngx-own-chart.service';

describe('NgxOwnChartService', () => {
  let service: NgxOwnChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxOwnChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
