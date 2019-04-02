import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-srnieto',
  templateUrl: './srnieto.component.html',
  styles: []
})
export class SrnietoComponent implements OnInit {
  
  @Input() srcontador: number;
  @Output() srcontadorCambio = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  
  reset() {
    this.srcontador = 0;
    this.srcontadorCambio.emit(this.srcontador);
  }
}
