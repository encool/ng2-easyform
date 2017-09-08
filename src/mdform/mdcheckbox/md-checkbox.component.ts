import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms'
// import { UIComponent } from '../../../core/decorators/ui-component.decorator'
import { UIComponent } from '../../core'

@UIComponent({
    selector: 'ef-md-checkbox',
    component: MdCheckBoxComponent
})
@Component({
    selector: 'ef-md-checkbox',
    template: `
      <md-checkbox
          class="example-margin"
          [checked]="checked"
          [indeterminate]="indeterminate"
          [labelPosition]="labelPosition"
          [formControl]="formControl"
          [eNfxFlex]="eNfxFlex" [eNfxFlex.xs]="eNfxFlexXs"  fxGrow="0"
          style="width:100%;padding-bottom: 15px; min-height:66px">
        {{label}}
      </md-checkbox>    
    `
        //   [eNfxFlex]="eNfxFlex" [eNfxFlex.xs]="eNfxFlexXs"  fxGrow="0"
})
export class MdCheckBoxComponent implements OnInit {
    @Input() field: any;
    @Input() form: FormGroup;

    span: number = 12
    label: string

    checked: boolean = false
    indeterminate: boolean = false
    labelPosition: string = 'after'

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
    }

}