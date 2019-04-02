import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-srhijo',
  templateUrl: './srhijo.component.html',
  styles: []
})
export class SrhijoComponent implements OnInit {
  
  @Input() srcontador: number;
  @Output() srcambioContador = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }
  
  multiplicar() {
    this.srcontador *= 2;
    this.srcambioContador.emit(this.srcontador);
  }

  dividir() {
    this.srcontador /= 2;
    this.srcambioContador.emit(this.srcontador);
  }

  resetNieto(nuevoContador) {
    this.srcontador = nuevoContador
    this.srcambioContador.emit(this.srcontador);
  }
}
