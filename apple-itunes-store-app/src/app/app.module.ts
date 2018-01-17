import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MyComponent } from './components/app.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    MyComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [MyComponent]
})
export class AppModule { }
