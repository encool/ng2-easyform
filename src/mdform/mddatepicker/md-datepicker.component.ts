import { Input, Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms'

import { MdDatepickerField } from './md-datepicker.field'
import { UIComponent } from '../../core/'

@UIComponent({
    selector: 'ef-md-datepicker',
    component: MdDatepickerComponent,
    field: MdDatepickerField,
    name: "MdFieldGroupComponent"
})
@Component({
    selector: 'ef-md-datepicker',
    template: `
<md-input-container [eNfxFlex]="eNfxFlex" [eNfxFlex.xs]="eNfxFlexXs" fxGrow="0" style="width: 100%;">
  <input mdInput [mdDatepicker]="myDatepicker" [placeholder]="label" [formControl]="formControl">
  <md-datepicker-toggle mdSuffix [for]="myDatepicker"></md-datepicker-toggle>
  <md-datepicker [touchUi]="touchUi" #myDatepicker></md-datepicker>    
  <md-error *ngIf="formControl.hasError('mdDatepickerParse');else elseBlock">
  <strong>时间格式不正确</strong>
  </md-error>   
  <ng-template #elseBlock>
    <md-error *ngIf="formControl.hasError('required')">
    <strong>必填项</strong>
    </md-error>   
  </ng-template>
</md-input-container>

    `
})
export class MdDatepickerComponent implements OnInit {

    @Input() field: any;
    @Input() form: FormGroup;

    span: number = 12
    label: string
    touchUi: boolean = false

    eNfxFlex: string
    eNfxFlexXs: string
    formControl: AbstractControl

    constructor() { }

    ngOnInit() {
        this.formControl = this.form.get(this.field.key)
        this.span = this.field.span == undefined ? 4 : this.field.span
        this.label = this.field.label
        this.eNfxFlex = "calc(" + (this.span / 12) * 100 + "% - 15px)"
        // this.eNfxFlexXs = "calc(100% - 15px)"
        this.eNfxFlexXs = "100%"
        this.formControl.valueChanges.subscribe(value => {
            // this
            // debugger
        })
    }

    patchValueToView() {
        // this.model = this.controll.value
    }

    @HostListener('window:resize', ['$event.target.innerWidth'])
    onResize(width) {
        if (width < 720) {
            this.touchUi = true
        } else {
            this.touchUi = false
        }
    }
}