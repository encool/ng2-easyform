import { FieldBase } from '../../core/';

export class MdDatepickerField extends FieldBase<any> {
    constructor(options: FieldBase<any>) {
        super(options);
        this.selector = 'ef-md-datepicker'
    }
}