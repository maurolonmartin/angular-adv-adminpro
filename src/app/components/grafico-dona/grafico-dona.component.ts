import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent {

  @Input() chartLabels: Label[] = [];
  @Input() chartData: MultiDataSet = [];
  @Input() chartType: ChartType = 'doughnut';

  public colors: Color[] = [
    { backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]}
  ];

}
