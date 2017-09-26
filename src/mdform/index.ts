import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroupDirective, NgForm } from '@angular/forms';

import {
    MdDatepickerModule,
    MdNativeDateModule,
    MdInputModule,
    MdSelectModule,
    MdCheckboxModule,
    MD_ERROR_GLOBAL_OPTIONS,
    ErrorStateMatcher
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout'
import { EnFlexDirective } from './flex/en-flex'

import { FormstatusWrap } from '../core'

import { MdDatepickerComponent } from './mddatepicker/md-datepicker.component'
import { MdInputComponent } from './mdinput/md-input.component'
import { MdTextareaComponent } from './mdinput/md-textarea.component'
import { MdCheckBoxComponent } from './mdcheckbox/md-checkbox.component'
// import { MdRadioGroupComponent } from './mdradiogroup/md-radio-group.component'
import { MdSelectComponent } from './mdselect/md-select.component'
import { MdFieldGroupComponent } from './fieldgroup/md-field-group.component'
import { MdFieldsComponent } from './md-fields.component'
import { MdFormComponent } from './md-form.component'

// import { MdNativeDateModule } from '@angular/material'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdInputModule,
        MdSelectModule,
        MdCheckboxModule,
        FlexLayoutModule,
    ],
    exports: [
        MdDatepickerComponent,
        MdInputComponent,
        MdTextareaComponent,
        MdCheckBoxComponent,
        // MdRadioGroupComponent,
        MdSelectComponent,
        MdFieldGroupComponent,
        MdFieldsComponent,
        MdFormComponent,
        EnFlexDirective,
    ],
    declarations: [
        MdDatepickerComponent,
        MdInputComponent,
        MdTextareaComponent,
        MdCheckBoxComponent,
        // MdRadioGroupComponent,
        MdSelectComponent,
        MdFieldGroupComponent,
        MdFieldsComponent,
        MdFormComponent,

        EnFlexDirective,
    ],
    providers: [
        { provide: MD_ERROR_GLOBAL_OPTIONS, useValue: { errorStateMatcher: myErrorStateMatcher } }
    ],
    entryComponents: [
        MdDatepickerComponent,
        MdInputComponent,
        MdTextareaComponent,
        MdCheckBoxComponent,
        // MdRadioGroupComponent,
        MdSelectComponent,
        MdFieldGroupComponent,
        MdFieldsComponent,
    ]
})
export class EasyFormMdModule { }

export function myErrorStateMatcher(control: FormControl, form: FormstatusWrap): boolean {
    // Error when invalid control is dirty, touched, or submitted
    // debugger
    // const isSubmitted = form && form.submitted;
    const isChecked = form.checked
    return !!(control.invalid && (control.dirty || control.touched || isChecked));
}


// export * from './core/ant-field-base'
// export * from './core/ant-options.field'

export * from './mddatepicker/md-datepicker.field'
export * from './mdinput/md-input.field'
export * from './mdinput/md-textarea.field'
export * from './mdcheckbox/md-checkbox.field'
// export * from './mdradiogroup/md-radio-group.field'
export * from './mdselect/md-select.field'
export * from './fieldgroup/md-field-group'

export * from './md-form.component'