import { Component, ViewChild, Inject, Optional } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

// import { DynamicNzformMComponent } from '../shared/nzform/dynamic-nzform-m.component'

// import { FieldBase } from '../core/form/field-base'
// import { NzfieldGroup } from '../core/nzform/nzfield-group'

// import { AntInputField } from '../core/nzform/ant-input.field'
// import { AntRadioGroupField } from '../core/nzform/ant-radio-group.field'
// import { AntSelectField } from '../core/nzform/ant-select.field'
// import { AntDatepickerField } from '../core/nzform/ant-datepicker.field'

import {
    AntFieldBase,
    AntFieldGroup,
    AntInputField,
    AntRadioGroupField,
    AntSelectField,
    AntDatepickerField,
    AntFormComponent
} from 'ng2-easyform'
// } from '../../../dist'


@Component({
    selector: 'ant-df',
    template: `   
    <ef-ant-form [nzLayout]="formLayout" [fields]="fields"></ef-ant-form>
    <span nz-row style="padding-left:15px">表单值：{{formvalue}}</span>    
    <div nz-row>
        <button md-button (click)="openDialog()">Open dialog</button>
    </div>
    `,
})
export class AntDynamicFormComponent {
    fields: AntFieldBase<any>[]
    formvalue: string
    formLayout: string

    @ViewChild(AntFormComponent) form: AntFormComponent
    constructor(public dialog: MatDialog, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
        this.fields = [
            new AntRadioGroupField({
                key: 'formLayout',
                label: "表单排列方式",
                span: 24,
                // required: true,
                options: {
                    horizontal: "水平",
                    vertical: "垂直",
                    inline: '内联'
                },
                isHorizontal: true
            }),
            new AntFieldGroup({
                key: 'user',
                fields: [
                    new AntInputField({
                        key: 'userId',
                        label: "用戶Id",
                        required: true,
                        span: 6,
                        // disabled: true,
                        isHorizontal: true

                    }),
                    new AntInputField({
                        key: 'userName',
                        label: "用戶名称",
                        span: 6,
                        // required: true,
                        disabled: true,
                        isHorizontal: true

                    }),
                    new AntSelectField({
                        key: 'sex',
                        label: "性别",
                        required: true,
                        span: 12,
                        // disabled: true,
                        isHorizontal: true,
                        // dictName: "性别",
                        options: {
                            M: "男",
                            F: "女",
                            Z: '未知'
                        },
                    }),
                    new AntDatepickerField({
                        key: 'bornTime',
                        label: "出生日期",
                        span: 6,
                        required: true,
                        isHorizontal: true,
                    }),
                ]
            }),

        ]
    }

    ngAfterViewInit() {
        this.form.form.valueChanges.subscribe(value => {
            setTimeout(() => {
                this.formvalue = JSON.stringify(value)
            });
        })
        if (this.data) {
            this.form.form.patchValue(JSON.parse(this.data))
        }
        this.form.form.get("formLayout").valueChanges.subscribe(value => {
            this.formLayout = value
        })
    }

    openDialog() {
        this.dialog.open(AntDynamicFormComponent, {
            data: this.formvalue,
            height: '400px',
            width: '600px',
        });
    }
}