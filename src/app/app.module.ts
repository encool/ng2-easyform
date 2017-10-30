import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MatNativeDateModule,
  MatButtonModule,
} from '@angular/material'
import { HttpModule } from '@angular/http';
import { Bootstrap3GridModule } from "ng2-bootstrap3-grid";

import { EasyFormCoreModule, EasyFormMdModule, EasyFormAntModule, EfDictdataService } from '../../'

import { AppComponent } from './app.component';
import { DictdataService } from './dictdata.service';

import { MdEasyformComponent } from './mdform/md-easyform.component'
import { AntDynamicFormComponent } from "./antform/ant-dynamic-form.component";
import { IndexComponent } from './index/index.component'

@NgModule({
  declarations: [
    AppComponent,
    MdEasyformComponent,
    AntDynamicFormComponent,
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
    EasyFormAntModule,
    Bootstrap3GridModule,
  ],
  providers: [
    { provide: EfDictdataService, useClass: DictdataService, },
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
