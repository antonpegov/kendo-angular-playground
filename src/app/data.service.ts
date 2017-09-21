import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private _http: HttpClient) { }

  // пытался вытянуть их вручную, но проблемма была в том, что я забыл создать API-Key )))
  getPersons() : Observable<any>{
    return this._http.get(`https://sheets.googleapis.com/v4/spreadsheets/1RhVYWFnF-t7Nl1alHxyhcUvqMmgi6uR3J_ChanUEOBQ?includeGridData=true&ranges=B1%3AD&key=AIzaSyB2BI5dURtgi7mdkr-_5cmJ3ZHOO-G9F2c`)
        .map((res:any) => res.json())
        //.catch(this.handleError);
  }
  handleError(e){
    console.error(e);
  }
}
