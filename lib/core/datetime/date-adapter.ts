import { Injectable } from "@angular/core";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import * as _moment from 'moment';
import { Moment } from 'moment';

// import {default as _rollupMoment, Moment} from 'moment';

// const moment = _rollupMoment || _moment;
@Injectable()
export class EfDateAdapter extends MomentDateAdapter {
    parse(value: any, parseFormat: string | string[]): Moment | null {
        debugger
        if (value && typeof value == 'string'
            && value.length == 13 || value.length == 10 && parseInt(value)) {
            return _moment.unix(parseInt(value))
        } else {
            return super.parse(value, parseFormat)
        }
    }
    deserialize(value: any): Moment | null{
        debugger
        return super.deserialize(value)
    }
}