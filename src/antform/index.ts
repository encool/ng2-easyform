import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    NzGridModule,
    NzFormModule,
    NzDatePickerModule,
    NzInputModule,
    NzRadioModule,
    NzSelectModule,
    NzToolTipModule,
    NzButtonModule,
} from 'ng-zorro-antd';

import { AntDatepickerComponent } from './antdatepicker/ant-datepicker.component'
import { AntInputComponent } from './antinput/ant-input.component'
import { AntRadioGroupComponent } from './antradiogroup/ant-radio-group.component'
import { AntSelectComponent } from './antselect/ant-select.component'
import { AntFieldGroupComponent } from './fieldgroup/ant-field-group.component'
import { AntFieldsComponent } from './ant-fields.component'
import { AntFormComponent } from './ant-form.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NzGridModule,
        NzFormModule,
        NzDatePickerModule,
        NzInputModule,
        NzRadioModule, 
        NzSelectModule,
        NzToolTipModule,
        NzButtonModule,
        
    ],
    exports: [
        NzGridModule,
        NzFormModule,
        NzDatePickerModule,
        NzInputModule,
        NzRadioModule,   
        NzSelectModule,
        NzToolTipModule,
        NzButtonModule,
        

        AntDatepickerComponent,
        AntInputComponent,
        AntRadioGroupComponent,
        AntSelectComponent,
        AntFieldGroupComponent,
        AntFieldsComponent,
        AntFormComponent,
    ],
    declarations: [
        AntDatepickerComponent,
        AntInputComponent,
        AntRadioGroupComponent,
        AntSelectComponent,
        AntFieldGroupComponent,
        AntFieldsComponent,
        AntFormComponent,
    ],
    providers: [

    ],
    entryComponents: [
        AntDatepickerComponent,
        AntInputComponent,
        AntRadioGroupComponent,
        AntSelectComponent,
        AntFieldGroupComponent,
        AntFieldsComponent,
    ]
})
export class EasyFormAntModule { }

export * from './core/ant-field-base'
export * from './core/ant-options.field'

export * from './antdatepicker/ant-datepicker.field'
export * from './antinput/ant-input.field'
export * from './antradiogroup/ant-radio-group.field'
export * from './antselect/ant-select.field'
export * from './fieldgroup/ant-field-group'

export * from './ant-form.component'