import { Component, ViewChild } from '@angular/core';
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
    MdFieldGroup
// } from 'ng2-easyform'
} from '../../../lib'

@Component({
    selector: 'md-form-demo',
    template: `
    <ef-md-form [fields]="fields"></ef-md-form>
    <span>表单值：{{formvalue}}</span>
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
                dictName: '性别',
                noneOption: false
            }),
            new MdTextareaField({
                key: "userAddress",
                label: "地址",
                required: false,
                span: 10,
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
    }
    ngAfterViewInit() {
        this.form.form.valueChanges.subscribe(value => {
            this.formvalue = JSON.stringify(value)
        })
    }
}