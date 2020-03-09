import { Component, OnInit, Input } from '@angular/core';
import { CurrencyConverter} from '../models/currency-converter.model';
import { CurrencyOperationsService } from '../services/currency-operations.service'
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CurrencyConverterState } from '../store/currency-converter.state';
import { Store } from '@ngrx/store';
import { currencyConverterValidator} from '../validators/currency-converter-validator';
import * as currJsonData from '../../assets/CURRENCY_CONVERT.json';

@Component({
  selector: 'app-currency-converter-form',
  templateUrl: './currency-converter-form.component.html',
  styleUrls: ['./currency-converter-form.component.scss']
})
export class CurrencyConverterFormComponent implements OnInit {

  currConvFrm: FormGroup;
  toCurVal: any;
  getConvertVal: any;
  formData: any;  

  constructor(private formBuilder: FormBuilder,private curOprApi : CurrencyOperationsService,private store: Store<CurrencyConverterState>) { 
       
  }

  ngOnInit(): void {
    this.cxRenderCurrForm(currJsonData);
    this.currConvFrm = this.cxGetCurrencyFrmVals(); 
    this.cxSetDisableFrmField("cu_to_amt")
    
  }
  cxRenderCurrForm(resData) {    
    this.formData = resData.default;    
  }
  cxUpdateCurrencyStore(frmCurVal:any, toCurVal:any,frmCurSelected:any,toCurSelected:any) {
    this.store.dispatch({
      type: 'CALC_CURR',
      curvalues: <CurrencyConverter> {
        frmCurVal:frmCurVal,
        toCurVal:toCurVal,
        frmCurSelected:frmCurSelected,
        toCurSelected:toCurSelected
      }
    });
  }
 
  
  getFromCurr(e) { 
    
    this.curOprApi.setCurrencyVal(this.currConvFrm)
    .subscribe(upCurrVal => {
        this.getConvertVal = this.curOprApi.getCurConverted(upCurrVal,this.currConvFrm.value.cu_from_amt,this.currConvFrm.value.cu_from_curr)       
        this.cxUpdateCurrencyStore( this.currConvFrm.value.cu_from_amt,this.getConvertVal,this.currConvFrm.value.cu_from_curr,this.currConvFrm.value.cu_to_curr);
        this.store.subscribe(s => {
          this.currConvFrm.patchValue({
              cu_to_amt: s.currencyconverter['toCurVal']
              
            });
         
        } );
      }, err => {
      
    });    

  }
  
  cxGetCurrencyFrmVals(){ 
   
    return this.formBuilder.group({
        cu_from_amt: ['', [Validators.required,currencyConverterValidator]],
        cu_from_curr: ['', Validators.required],
        cu_to_amt: ['', ''],
        cu_to_curr: ['', [Validators.required]]      
    });
  }
  cxSetDisableFrmField(fldId){ 
    this.currConvFrm.reset({
    [fldId]: {value: '', disabled: true}      
    });
  }
  get f() {     
    return this.currConvFrm.controls; 
  }

  
}
