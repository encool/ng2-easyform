import { Component, ViewChild } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import {
    FieldBase,
    MdTextinputField,
    MdTextareaField,
    MdDatepickerField,
    MdSelectField,
    MdFormComponent,
    // AntFormComponent,
    MdCheckboxField,
    MdRadioGroupField,
    // AntFieldBase,
    uilist,
    uimap1,
} from 'ng2-easyform'
// } from '../../../dist'

// <ef-ant-form #displayantform [fields]="addedfields"></ef-ant-form>
// <span>form value:{{formvalue}}</span>

@Component({
    selector: 'index-case',
    template: `
    <div bsContainer style="padding:10px">  
        <div bsRow>
            <div bsCol.sm="2">          
                <ef-md-form #addform [fields]="fields"></ef-md-form>
                <div>
                    <button mat-button color="primary" (click)="onAdd()">添加</button>
                    <button mat-button color="accent" (click)="onReset()">重置</button>
                </div>
            </div>
            <div *ngIf="formType == 'md'" bsCol.sm="10">
                <ef-md-form #displaymdform [fields]="addedfields"></ef-md-form>
                <span>form value:{{formvalue}}</span>
            </div>  
            <div *ngIf="formType == 'ant'" bsCol.sm="10">

            </div>                 
        </div>

    </div>
    
`,
})
export class IndexComponent {

    fields: FieldBase<any>[] = []
    addedfields: FieldBase<any>[] = []
    formvalue: string

    @ViewChild("addform") addform: MdFormComponent

    @ViewChild("displaymdform") displaymdform: MdFormComponent
    // @ViewChild("displayantform") displayantform: AntFormComponent

    formType: string = "ant"
    uiOptions = []
    antOptions = []
    mdOptions = []
    uiOptionsSubject: Subject<any> = new Subject<any>()

    // fieldType: MdSelectField

    constructor() {

    }

    ngOnInit() {
        uilist.forEach(value => {
            if (value.name != "字段Group") {
                // if (value.field instanceof AntFieldBase) {
                if (this.isAntForm(value)) {
                    this.antOptions.push(value)
                } else {
                    this.mdOptions.push(value)
                }
            }
        })

        this.fields = [
            new MdRadioGroupField({
                key: "type",
                label: "表单类型",
                span: 12,
                // disabled: true,
                options: {
                    // ant: "Ant design",
                    md: "Material design",
                },
                value: "ant",
                valueChange: (value) => {
                    if (value != null) {
                        if (this.formType != value) {
                            this.formType = value
                            this.addedfields = []
                        }
                        if (value === "ant") {
                            this.uiOptions = this.antOptions
                            this.uiOptionsSubject.next(this.uiOptions)
                        } else {
                            this.uiOptions = this.mdOptions
                            this.uiOptionsSubject.next(this.uiOptions)
                        }
                    }
                }
            }),
            new MdSelectField({
                key: "fieldType",
                label: "控件类别",
                required: true,
                span: 12,
                // options: this.uiOptions,
                optionsOb: this.uiOptionsSubject,
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
        let field = new FieldType(value)
        this.addedfields = this.addedfields.concat([field])
        this.onReset()
        setTimeout(() => {
            if (this.formType == "ant") {
                // this.displayantform.form.valueChanges.subscribe(value => {
                //     this.formvalue = JSON.stringify(value)
                // })
            } else if (this.formType == "md") {
                this.displaymdform.form.valueChanges.subscribe(value => {
                    this.formvalue = JSON.stringify(value)
                })
            }
        });
        this.addform.markUnCheck()
    }

    onReset() {
        let value = this.addform.form.value
        for (let p in value) {
            if (p != "type" && p != 'fieldType') {
                value[p] = undefined
            }
        }
        value.type = this.addform.form.value.type
        value.fieldType = this.addform.form.value.fieldType
        this.addform.form.reset()
        this.addform.form.patchValue(value)
    }

    isAntForm(value: { selector: string }) {
        if (value.selector.indexOf("ef-ant") != -1) {
            return true
        } else {
            return false;
        }
    }

    ngAfterViewInit() {
        // this.fieldType = this.addform.getField("fieldType") as any
        this.uiOptions = this.antOptions
        setTimeout(() => {
            this.uiOptionsSubject.next(this.uiOptions)
        });
    }
}