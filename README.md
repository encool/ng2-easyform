# ng2-easyform
[![npm package](https://img.shields.io/npm/v/ng2-easyform.svg)](https://www.npmjs.org/package/ng2-easyform)

一种快速建表单的方法，抽象出字段定义，如字段label、占位、必填、可写、值变换等。根据字段定义生成表单。
项目状态：开发中

# 使用

##

npm install ng2-easyform --save

## Material Form

引入如下angular module
```
import { EasyFormCoreModule, EasyFormMdModule } from 'ng2-easyform'
```

In your component

```typescript
import { Component, ViewChild } from '@angular/core';

import {
    FieldBase,
    MdTextinputField,
    MdTextareaField,
    MdDatepickerField,
    MdSelectField,
    MdFormComponent,
    MdCheckboxField
} from 'ng2-easyform'

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

                } //值变换
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
```
## Ant Form

正在整合中

# demo
[demo](http://ef.4vvvv.cn)

