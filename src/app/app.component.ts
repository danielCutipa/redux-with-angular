import { AppState } from './app.reducers';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  srcontador: number;
  contador: number;

  constructor(private store: Store<AppState>) {
    this.srcontador = 11;

    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    })
  }

  incrementar() {
    const action = new IncrementarAction();
    this.store.dispatch(action);
  }

  decrementar() {
    const action = new DecrementarAction();
    this.store.dispatch(action);
  }

  sr_incrementar() {
    this.srcontador++;
  }

  sr_decrementar() {
    this.srcontador--;
  }
}
