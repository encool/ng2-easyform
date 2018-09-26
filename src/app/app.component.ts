import { Component, Inject, ViewContainerRef } from '@angular/core';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

// import { EasyUIMdModalModule, MdModalService, ModalConfig } from '../../../'

// import { MD_DIALOG_DATA, MdDialog } from "@angular/material"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {

  }

  openDialog() {

  }
}