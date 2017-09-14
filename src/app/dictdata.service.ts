import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { EfDictdataService } from '../../'

@Injectable()
export class DictdataService extends EfDictdataService {
    private _prefix = "dict/"
    private _getDictDataMaps = 'getDictDataMaps'

    results: any

    constructor(public http: Http) {
        super(http)
    }

    getDictDataMaps(ids: string[]) {
        let url = this._prefix + this._getDictDataMaps
        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, JSON.stringify(ids), options)
            .map((data) => data.json())
            .catch(this.handleError)
            .subscribe(
            data => {
                this.results = data
            }
            )
    }

    getDictDataValue(dictType: string, dictname: string) {
        let dictdata = this.results[dictType][dictname]
        return dictdata.dictdataValue
    }

    getDictDataObserable(dictName: string): Observable<any[]> {
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.set('dictTypeName', dictName);
        // urlSearchParams.set('', );
        let headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
        let options = new RequestOptions({
            headers: headers,
            search: urlSearchParams
        });
        // debugger
        return this.http.get('./dict/getByDictTypeName', options)
            .map((data) => data.json())

        // let baseUrl = 'ws/getDictDataMap'
        // let param = {
        //     dictTypeNames: [dictName]
        // }
        // // {"dictTypeNames":["服务分类"]}
        // return this.http.post(baseUrl, JSON.stringify(param), options)
        //     .map((data) => data.json().result[dictName])
    }
}