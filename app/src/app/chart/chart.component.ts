import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar' as const;
  public barChartLegend = true;

  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  ngOnInit() {
  }

  // public chartType: string = 'doughnut';

  //public chartDatasets: Array<any> = [
    //{ data: [300, 50, 100, 40, 120], label: 'My First dataset' }
  //];

  //public chartLabels: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

  //public chartColors: Array<any> = [
    //{
      //backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      //hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      //borderWidth: 2,
    //}
  //];

  //public chartOptions: any = {
    //responsive: true
  //};
  //public chartClicked(e: any): void { }
  //public chartHovered(e: any): void { }
}
