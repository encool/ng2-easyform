import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldControlService } from './field/field.control.service'
import { FormstatusWrap } from './form/formstatus.wrap'
import { DisableControlDirective } from "./control/disable-control.directive ";
import { RequiredControlDirective } from "./control/required-control.directive";

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        DisableControlDirective,
        RequiredControlDirective,
    ],
    declarations: [
        //avoid aot fails,ugly
        FormstatusWrap,
        DisableControlDirective,
        RequiredControlDirective,
    ],
    providers: [
        FieldControlService
    ],
    entryComponents: [],
})
export class EasyFormCoreModule { }

export { FieldControlService } from './field/field.control.service'
export { uilist, uimap, uimap1, UIComponent } from './decorator/ui-component.decorator'
export { FormstatusWrap } from './form/formstatus.wrap'
export { EfDictdataService } from './service/dictdata.service'
export { FieldBase } from './field/field-base'
export { FieldArray } from './field/field-array'
export { FieldGroup } from './field/field-group'
export { OptionsField } from './field/options.field'
export { QueryOperate } from './field/query-operate'
