import { OptionsField } from '../../core';
import { Observable } from 'rxjs/Observable';

import { ValidatorFn, AsyncValidatorFn, Validators } from '@angular/forms';

export class MdSelectField extends OptionsField {
  noneOption: boolean = true
  constructor(options: OptionsField & { noneOption?: boolean }) {
    super(options);
    this.selector = 'ef-md-select' //MD select
    this.noneOption = options.noneOption == undefined ? true : options.noneOption
  }
}