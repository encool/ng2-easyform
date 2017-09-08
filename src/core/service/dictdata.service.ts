import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

// @Injectable()
export abstract class EfDictdataService {

    constructor() { }

    abstract getDictDataObserable(dictName: string)//: Observable<any[]>

    protected handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}