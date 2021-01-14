import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Componente1Component } from './components/componente1/componente1.component';

// Routes
import {APP_ROUTING} from './Routes/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
