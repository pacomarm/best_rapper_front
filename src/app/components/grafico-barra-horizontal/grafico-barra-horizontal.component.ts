import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  @Input() results: any[] = [];
  
  // intervalo;
  // results: any[] = [
  //   {
  //     "name": "Kendrick Lamar",
  //     "value": 8940000
  //   },
  //   {
  //     "name": "J Cole",
  //     "value": 5000000
  //   },
  //   {
  //     "name": "Meek Mill",
  //     "value": 7200000
  //   },
  //   {
  //     "name": "Lil Baby",
  //     "value": 7200000
  //   }
  // ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Artist';
  showYAxisLabel = true;
  yAxisLabel = 'Vote';

  colorScheme = 'nightLights';

  constructor() {

    // this.intervalo = setInterval( ()=>{

    //   const newResults = [...this.results];

    //   // tslint:disable-next-line: forin
    //   for( let i in newResults ){
    //     newResults[i].value = Math.round(Math.random() * 500);
    //   }

    //   this.results = [...newResults];
    // }, 1500);

  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(){

  //   clearInterval( this.intervalo );
  }

}
