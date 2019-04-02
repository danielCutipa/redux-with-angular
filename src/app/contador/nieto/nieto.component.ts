import { ResetAction } from './../contador.actions';
import { AppState } from './../../app.reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  contador: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    })
  }

  reset() {
    const action = new ResetAction();
    this.store.dispatch(action);
  }
}
