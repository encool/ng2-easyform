import { Input, Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

import { UIComponent, FieldBase } from '../../core/'
import { MdTextinputField } from './md-input.field'

@UIComponent({
    selector: 'ef-md-input',
    component: MdInputComponent,
    field: MdTextinputField,
    name: "文本框"
})
@Component({
    selector: 'ef-md-input',
    template:
        `
        <mat-form-field
            [bsCol.sm]="span"
            [bsCol.xs]="12"
            [hideRequiredMarker]="false">
          <input matInput 
            [type]="field.type || field.params.inputType " 
            [placeholder]="label" 
            [formControl]="fieldControl"
            [disableControl]="field.disabled"
          >
          <mat-error *ngIf="fieldControl.hasError('required')">
          <strong>必填项</strong>
          </mat-error>          
        </mat-form-field>      
  
    `
})
export class MdInputComponent implements OnInit {

    @Input() field: MdTextinputField;
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

    ngOnChanges(changes: SimpleChanges) {
        debugger
        for (let propName in changes) {
            let chng = changes[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
        }
    }
}