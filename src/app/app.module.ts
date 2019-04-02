import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { contadorReducer } from './contador/contador.reducer';

import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { SrhijoComponent } from './contador/srhijo/srhijo.component';
import { SrnietoComponent } from './contador/srnieto/srnieto.component';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent,
    SrhijoComponent,
    SrnietoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contador: contadorReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
