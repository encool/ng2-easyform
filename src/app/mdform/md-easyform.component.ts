import { Component, ViewChild } from '@angular/core';
import { ValidationErrors } from "@angular/forms";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// import { DynamicFormMComponent } from '../shared/form/dynamic-form-m.component'

// import { FieldBase } from '../core/form/field-base'
// import { MdTextinputField } from '../core/form/md-textinput.field'
// import { MdTextareaField } from '../core/form/md-textarea.field'
// import { MdDatepickerField } from '../core/form/md-datepicker.field'
// import { MdSelectField } from '../core/form/md-select.field'
// import { MdCheckboxField } from '../core/form/md-checkbox.field'

import {
    FieldBase,
    MdTextinputField,
    MdTextareaField,
    MdDatepickerField,
    MdSelectField,
    MdFormComponent,
    MdCheckboxField,
    MdRadioGroupField,
    MdFieldGroup
    // } from 'ng2-easyform'
} from '../../../lib'

@Component({
    selector: 'md-form-demo',
    template: `
    <div bsContainerFluid> 
        <ef-md-form [fields]="fields"></ef-md-form>
        <span>表单值：{{formvalue}}</span>
        <div bsRow>        
            <button mat-button (click)="onClick($event)">点击</button>
            <button mat-button (click)="onClickPatchValue($event)">PatchValue</button>
            <button mat-button (click)="onCheckClick($event)">点击</button>
        </div>
    </div>
`,
})
export class MdEasyformComponent {

    fields: FieldBase<any>[]
    formvalue: string

    @ViewChild(MdFormComponent) form: MdFormComponent

    constructor() {

    }
    ngOnInit() {
        this.fields = [
            new MdTextinputField({
                key: "userId",
                label: "用户ID",
                // required: false,
                span: 4,
                asyncValidator: (control) => {
                    return new Promise((resolve) => {
                        let errors: ValidationErrors = { "myerror": "some wrong!" }
                        resolve(errors)
                    })
                }
            }),
            new MdTextinputField({
                key: "userName",
                label: "用户名",
                required: true,
                span: 4,
                valueChange: (value) => {
                    this
                    // debugger
                }
            }),
            new MdFieldGroup({
                key: "mom",
                groupName: "mom",
                fields: [
                    new MdTextinputField({
                        key: "userId",
                        label: "用户ID",
                        required: true,
                        // disabled: true,
                        span: 4,
                    }),
                    new MdTextinputField({
                        key: "userName",
                        label: "用户名",
                        required: true,
                        span: 4,
                        valueChange: (value) => {
                            this
                            // debugger
                        }
                    }),
                ]
            }),
            new MdDatepickerField({
                key: "bornTime",
                label: "出生日期",
                required: true,
                span: 4,
            }),
            new MdDatepickerField({
                key: "inTime",
                label: "入职日期",
                required: true,
                disabled: true,
                span: 4,
            }),
            new MdCheckboxField({
                key: "enable",
                label: "启用",
                required: true,
                span: 4,
            }),
            new MdSelectField({
                key: "gender",
                label: "性别",
                required: true,
                span: 4,
                // dictName: '性别',
                options: [{
                    key: "m",
                    value: "男"
                },
                {
                    key: "f",
                    value: "女"
                }
                ],
                noneOption: false
            }),
            new MdTextareaField({
                key: "userAddress",
                label: "地址",
                required: false,
                span: 10,
                // asyncValidator: (control) => {
                //     return new Promise((resolve) => {
                //         let errors: ValidationErrors = { "myerror": "some wrong2222!" }
                //         resolve(null)
                //     })
                // }                
            }),
            new MdRadioGroupField({
                key: "radioGroup",
                label: "radioGroup",
                required: false,
                options: [{
                    key: "m",
                    value: "男"
                },
                {
                    key: "f",
                    value: "女"
                }
                ],
                span: 6,
            }),
            new MdTextareaField({
                key: "userAddress1",
                label: "地址1",
                required: false,
                span: 8,
            }),
            new MdTextareaField({
                key: "userAddress2",
                label: "地址2",
                required: false,
                span: 12,
            }),
        ]
        // this.fields[0].disabled = this.disabledId
    }

    onClick(e) {
        this.fields[0].disabled = !this.fields[0].disabled
        this.fields[1].disabled = !this.fields[1].disabled
        this.fields[2].disabled = !this.fields[2].disabled
        this.fields[3].disabled = !this.fields[3].disabled
        this.fields[4].disabled = !this.fields[4].disabled
        this.fields[5].disabled = !this.fields[5].disabled
        this.fields[6].disabled = !this.fields[6].disabled
        this.fields[7].disabled = !this.fields[7].disabled
        this.fields[8].disabled = !this.fields[8].disabled

        // this.fields[0].required = !this.fields[0].required
        // this.fields[1].required = !this.fields[1].required
        // this.fields[2].required = !this.fields[2].required
    }

    onCheckClick(e) {
        this.form.form.markAsDirty()
    }

    onClickPatchValue(e) {
        this.form.form.patchValue({ bornTime: new Date() })
    }

    ngAfterViewInit() {
        this.form.form.valueChanges.subscribe(value => {
            this.formvalue = JSON.stringify(value)
        })
    }
}