import { Component, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { FieldBase } from '../core';
import { FieldControlService } from '../core';
@Component({
    selector: 'ef-md-form',
    template: `
        <form (ngSubmit)="onSubmit()" [formGroup]="form" class="ef-md-form clearfix" role="form">
            <ef-md-fields [fields]="fields" [form]="form" [model]="model"></ef-md-fields>
        </form>    
    `,
    providers: [FieldControlService],
    styles: [`.ef-md-form{font-size:16px}
    `]
})
export class MdFormComponent implements OnInit {
    @Input() fields: FieldBase<any>[] = [];
    @Input() model: any = {};

    @ViewChild(FormGroupDirective) ngForm: FormGroupDirective
    form: FormGroup;
    payLoad = '';
    constructor(private fcs: FieldControlService) {

    }
    ngOnInit() {
        // this.fields = _.sortBy(this.fields, "order");
        this.form = this.fcs.toFormGroup(this.fields);
    }

    ngAfterViewInit() {
        debugger
        // eval("console.log(this);this.fieldControl.valueChanges.subscribe(data => {console.log('come in!',data)})")
        // this.form.
        if (this.model) {
            setTimeout(() => {
                this.form.patchValue(this.model)
                // this.form.updateValueAndValidity()                
            }, 0)
        }
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (changes['fields'] && changes['fields'].currentValue) {
            // _.sortBy(this.fields, "order");
            this.form = this.fcs.toFormGroup(changes['fields'].currentValue)
        }
    }

    getField(fieldNo: string): FieldBase<any> {
        let result = null
        this.fields.forEach(v => {
            if (v.key == fieldNo) {
                result = v
            }
        })
        return result
    }

}
