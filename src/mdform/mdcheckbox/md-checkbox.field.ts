
import { FieldBase } from '../../core';

export class MdCheckboxField extends FieldBase<any> {
    constructor(options: FieldBase<any>) {
        super(options);
        this.selector = 'ef-md-checkbox'
    }
}