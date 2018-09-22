import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  //Aqui vamos a programar la barra de progreso, las dos barras 1 y 2

  progreso1: number = 20;
  progreso2: number = 30;

  constructor() { }

  ngOnInit() {
  }
  }
