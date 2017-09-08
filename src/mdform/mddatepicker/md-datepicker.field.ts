import { FieldBase } from '../../core/';

export class MdDatepickerField extends FieldBase<string> {
    constructor(options: FieldBase<string>) {
        super(options);
        this.selector = 'ef-md-datepicker'
    }
}