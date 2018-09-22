import { Component, Input, Output, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { element } from 'protractor';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  // usaremos un decorador para hacer referencia a elemnto en nuestro html, 
  // este elemento recibe un parametro como referencia a unelemnto html

  @ViewChild('txtProgress') txtProgress: ElementRef;
// estas son mis variables, coloamos input porq estas 2 variables pueden venir de afuera
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  // con el output notificare que habra un cambio en la barra de progreso un evento 

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    //console.log('Leyenda', this.leyenda);
    //console.log('progreso', this.progreso);
   }

  ngOnInit() {
   // console.log('Leyenda', this.leyenda);
   //console.log('progreso', this.progreso);
  }

  onChanges(newValue: number) {
    console.log(newValue);

    // mediante javascript voy a prevenir que el usuario escriba cosas raras ahi 

    // let elemHTML: any = document.getElementsByName('progreso')[0];
    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
  
    //elemHTML.value = this.progreso;

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }

  // programaremos los botones de mas y menos para la barra de progreso
 cambiarValor (valor: number) {

  if (this.progreso >= 100 && valor > 0 ) {
    this.progreso = 100;
  return;
 }

 if (this.progreso <= 0 && valor< 0) {
   this.progreso = 0;
   return;
  }
  this.progreso = this.progreso + valor;

  this.cambioValor.emit(this.progreso);

}

}
