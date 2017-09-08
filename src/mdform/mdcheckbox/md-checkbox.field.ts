
import { FieldBase } from '../../core';

export class MdCheckboxField extends FieldBase<string> {
    constructor(options: FieldBase<string>) {
        super(options);
        this.selector = 'ef-md-checkbox'
    }
}