import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextElipsisComponent } from './text-elipsis/text-elipsis.component';


@NgModule({
  declarations: [
    AppComponent,
    TextElipsisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
