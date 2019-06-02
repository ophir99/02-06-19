import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { FruitService } from './fruits.service';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
