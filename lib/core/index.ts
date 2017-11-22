import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldControlService } from './field/field.control.service'
import { FormstatusWrap } from './form/formstatus.wrap'

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [

    ],
    declarations: [
        //avoid aot fails,ugly
        FormstatusWrap
    ],
    providers: [
        FieldControlService
    ],
    entryComponents: [],
})
export class EasyFormCoreModule { }

export { FieldControlService } from './field/field.control.service'
export * from './decorator/ui-component.decorator'
export * from './form/formstatus.wrap'
export { EfDictdataService } from './service/dictdata.service'
export * from './field/field-base'
export * from './field/field-array'
export * from './field/field-group'
export * from './field/options.field'
export * from './field/query-operate'
