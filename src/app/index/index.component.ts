import { Component, ViewChild } from '@angular/core';

import {
    FieldBase,
    MdTextinputField,
    MdTextareaField,
    MdDatepickerField,
    MdSelectField,
    MdFormComponent,
    MdCheckboxField,
    uilist,
    uimap1,
} from '../../../'

@Component({
    selector: 'index-case',
    template: `
    <div>  
        <div style="float:left;width:300px">
        
            <ef-md-form #addform [fields]="fields"></ef-md-form>
            <div>
                <button md-button color="primary" (click)="onAdd()">添加</button>
                <button md-button color="accent" (click)="onReset()">重置</button>
            </div>
        </div>
        <div>
        <ef-md-form #displayform [fields]="addedfields"></ef-md-form>
        <span>form value:{{formvalue}}</span>
        </div>
    </div>
    
`,
})
export class IndexComponent {

    fields: FieldBase<any>[] = []
    addedfields: FieldBase<any>[] = []
    formvalue: string

    @ViewChild("addform") addform: MdFormComponent
    @ViewChild("displayform") displayform: MdFormComponent

    constructor() {
    }
    ngOnInit() {
        this.fields = [
            new MdSelectField({
                key: "fieldType",
                label: "控件类别",
                required: true,
                span: 12,
                options: uilist,
                optionId: "selector",
                optionName: "name",
                noneOption: false
            }),
            new MdTextinputField({
                key: "key",
                label: "字段编码",
                required: true,
                span: 12,
            }),
            new MdTextinputField({
                key: "label",
                label: "字段名称",
                required: true,
                // disabled: true,
                span: 12,
            }),
            new MdTextinputField({
                key: "span",
                label: "占位（12栅格）",
                required: true,
                type: "number",
                // disabled: true,
                span: 12,
            }),
        ]
    }

    onAdd() {
        if (!this.addform.form.valid) {
            this.addform.markCheck()
            return
        }
        let value = this.addform.form.value
        let uioption = uimap1.get(value.fieldType)
        let FieldType = uioption.field
        // debugger
        let field = new FieldType(value)
        this.addedfields = this.addedfields.concat([field])
        this.addform.form.reset()
        setTimeout(() => {
            this.displayform.form.valueChanges.subscribe(value => {
                this.formvalue = JSON.stringify(value)
            })
        });
        this.addform.markUnCheck()
    }

    onReset() {
        this.addform.form.reset()
    }

    ngAfterViewInit() {

    }
}