import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JllComponentLibraryModule } from 'jll-component-library';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JllComponentLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
