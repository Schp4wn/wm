import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { TickerComponent } from './ticker/ticker.component';


@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    TickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
