import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatNativeDateModule,
  MatButtonModule,
} from '@angular/material'
import { HttpModule } from '@angular/http';


import { EasyFormCoreModule, EasyFormMdModule, EfDictdataService } from '../../'

import { AppComponent } from './app.component';
import { DictdataService } from './dictdata.service';

import { MdEasyformComponent } from './mdform/md-easyform.component'
import { IndexComponent } from './index/index.component'

@NgModule({
  declarations: [
    AppComponent,
    MdEasyformComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatButtonModule,
    EasyFormCoreModule,
    EasyFormMdModule,
  ],
  providers: [
    { provide: EfDictdataService, useClass: DictdataService, },
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
