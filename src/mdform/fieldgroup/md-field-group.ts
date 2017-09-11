import { FieldGroup } from '../../core/';
import { ValidatorFn, AsyncValidatorFn, Validators } from '@angular/forms';

export class MdFieldGroup extends FieldGroup{

    constructor(options: FieldGroup) {
        super(options)
        this.selector = "ef-md-field-group"
    }
}