import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  @Input() title: string = 'Sin titulo';
  public doughnutChartLabels: string[] = [ 'Label1', 'Label2', 'Label3' ];
  @Input('labels') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
    ]
  };


}
