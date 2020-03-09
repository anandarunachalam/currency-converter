import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CurrencyConverter,CurrencyApiParms} from '../models/currency-converter.model';
import { Observable } from 'rxjs';

@Injectable()
export class CurrencyRequestService {

  constructor(private httpClient : HttpClient) { }

  getApiData(curApiUrl : string,curData : CurrencyApiParms) : Observable<CurrencyConverter>{  
    
    const  queryString = Object.keys(curData).map(key => key + '=' + curData[key]).join('&');    
    return this.httpClient.get<CurrencyConverter>(curApiUrl+queryString);       
  }

}
