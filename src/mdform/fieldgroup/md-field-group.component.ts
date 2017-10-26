import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldGroup } from '../../core'
import { FieldControlService } from '../../core/';
import { UIComponent } from '../../core/'

@UIComponent({
    selector: 'ef-md-field-group',
    component: MdFieldGroupComponent,
    name: "字段Group"
})
@Component({
    selector: 'ef-md-field-group',
    template: `
    <ng-container [formGroup]="form">
        <ng-container [formGroupName]="field.groupName">
        	<ef-md-fields [form]="form.controls[field.groupName]" [fields]="field.fields" [model]="model"></ef-md-fields>
        </ng-container>
    </ng-container>
    `,
})
export class MdFieldGroupComponent implements OnInit {
    @Input() field: FieldGroup;
    @Input() form: FormGroup
    @Input() model: any = {}
    constructor(private fcs: FieldControlService) {

    }
    ngOnInit() {
        // this.form.controls.
    }
    onSubmit() {
    }
}