import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout'
import { EnFlexDirective } from './flex/en-flex'

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
        MaterialModule,
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