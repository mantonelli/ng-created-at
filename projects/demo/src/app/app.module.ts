import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CreatedAtModule } from '@mantonelli/created-at';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CreatedAtModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
