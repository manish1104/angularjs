import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MyComponent } from './components/app.component';
import { NgbdModalCustomclass } from './components/app.modal'


@NgModule({
  declarations: [
    MyComponent,
    NgbdModalCustomclass
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [MyComponent, NgbdModalCustomclass]
})
export class AppModule { }
