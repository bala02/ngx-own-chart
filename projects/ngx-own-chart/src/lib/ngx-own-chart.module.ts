import { NgModule } from '@angular/core';
import { NgxOwnChartComponent } from './ngx-own-chart.component';
import { ChartsDirective } from './charts.directive';

@NgModule({
  declarations: [NgxOwnChartComponent, ChartsDirective],
  imports: [],
  exports: [NgxOwnChartComponent, ChartsDirective],
})
export class NgxOwnChartModule {}
