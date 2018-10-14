import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Utils2 } from '@Common/Utils2';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Utils2],
  bootstrap: [AppComponent]
})
export class AppModule {
}
