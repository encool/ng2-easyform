import { Input, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

import { MdTextareaField } from './md-textarea.field'
import { UIComponent } from '../../core'

@UIComponent({
    selector: 'ef-md-textarea',
    component: MdTextareaComponent,
    field: MdTextareaField,
    name: "MdTextareaComponent"
})
@Component({
    selector: 'ef-md-textarea',
    template:
    `
        <mat-form-field [eNfxFlex]="eNfxFlex" [eNfxFlex.xs]="eNfxFlexXs" fxShrink="1" fxGrow="0" style="width:100%">
          <textarea  matInput [type]="field.type || field.params.inputType" [placeholder]="lable" [formControl]="formControl"></textarea>
          <mat-error *ngIf="formControl.hasError('required')">
          <strong>必填项</strong>
          </mat-error>            
        </mat-form-field>      
  
    `
})
export class MdTextareaComponent implements OnInit {

    @Input() field: any;
    @Input() form: FormGroup;

    lable: string
    span: number = 12

    eNfxFlex: string
    eNfxFlexXs: string

    formControl: AbstractControl
    constructor() { }

    ngOnInit() {
        this.formControl = this.form.get(this.field.key)
        this.span = this.field.span == undefined ? 4 : this.field.span
        this.lable = this.field.label
        this.eNfxFlex = "calc(" + (this.span / 12) * 100 + "% - 15px)"
        // this.eNfxFlexXs = "calc(100% - 15px)"
        this.eNfxFlexXs = "100%"
        // debugger
    }

}