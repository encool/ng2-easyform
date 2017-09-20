import { Component, ViewChild } from '@angular/core';

import {
    FieldBase,
    MdTextinputField,
    MdTextareaField,
    MdDatepickerField,
    MdSelectField,
    MdFormComponent,
    MdCheckboxField
} from '../../../'

@Component({
    selector: 'index-case',
    template: `
    <ef-md-form [fields]="fields"></ef-md-form>
    <div>
    <button md-button color="primary">Primary</button>
    <button md-button color="accent">Accent</button>
    </div>
    <br>
    <ef-md-form [fields]="addedfields"></ef-md-form>
    
`,
})
export class IndexComponent {

    fields: FieldBase<any>[]
    addedfields: FieldBase<any>[]
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
                span: 4,
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