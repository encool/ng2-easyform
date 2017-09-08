import { Input, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

import { UIComponent, FieldBase } from '../../core/'

@UIComponent({
    selector: 'ef-md-input',
    component: MdInputComponent
})
@Component({
    selector: 'ef-md-input',
    template:
    `
        <md-input-container [eNfxFlex]="eNfxFlex" [eNfxFlex.xs]="eNfxFlexXs" 
            [hideRequiredMarker]="false"
            fxShrink="1" fxGrow="0" style="width:100%">
          <input mdInput [type]="field.type || field.params.inputType " [placeholder]="label" [formControl]="fieldControl">
          <md-error *ngIf="fieldControl.hasError('required')">
          <strong>必填项</strong>
          </md-error>          
        </md-input-container>      
  
    `
})
export class MdInputComponent implements OnInit {

    @Input() field: FieldBase<any>;
    @Input() form: FormGroup;

    label: string
    span: number = 12

    eNfxFlex: string
    eNfxFlexXs: string

    fieldControl: AbstractControl
    constructor() { }

    ngOnInit() {
        this.fieldControl = this.form.get(this.field.key)
        this.span = this.field.span == undefined ? 4 : this.field.span
        this.label = this.field.label
        this.eNfxFlex = "calc(" + (this.span / 12) * 100 + "% - 15px)"
        // this.eNfxFlexXs = "calc(100% - 15px)"
        this.eNfxFlexXs = "100%"
        // debugger

        this.fieldControl.statusChanges.subscribe(data => {
            // debugger
            if (this.field.statusChange instanceof Function) {
                this.field.statusChange(data)
            }
        })
        this.fieldControl.valueChanges.subscribe(data => {
            // debugger
            if (this.field.valueChange instanceof Function) {
                this.field.valueChange(data)
            }
        })
    }

    ngAfterViewInit() {
        
    }
}