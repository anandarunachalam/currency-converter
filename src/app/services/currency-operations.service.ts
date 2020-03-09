import { Injectable } from '@angular/core';
import { CurrencyRequestService } from '../services/currency-request.service';
import { CurrencyConverter } from '../models/currency-converter.model';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { environment } from './../../environments/environment';

@Injectable()
export class CurrencyOperationsService {

  constructor(private curReqApi: CurrencyRequestService) { }

  setCurrencyVal(curReqVals : FormGroup) : Observable< CurrencyConverter>{
    
    const newCurData =  { symbols:curReqVals.value.cu_from_curr,base:curReqVals.value.cu_to_curr};
    return this.curReqApi.getApiData(environment.url,newCurData);
  }

  getCurConverted(curReqVals:any,CurSelAmt:any,CurSelVals:string) { 
      return curReqVals.rates[CurSelVals] * CurSelAmt;   
  }

}
