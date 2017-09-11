import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldControlService } from './field/field.control.service'

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [

    ],
    declarations: [

    ],
    providers: [
        FieldControlService
    ],
    entryComponents: [],
})
export class EasyFormCoreModule { }

export * from './field/field.control.service'
export * from './decorator/ui-component.decorator'
export * from './service/dictdata.service'
export * from './field/field-base'
export * from './field/field-array'
export * from './field/field-group'
export * from './field/options.field'
