import { CurrencyConverter } from '../models/currency-converter.model';
import { Action } from '@ngrx/store';

export const CALC_CURR = 'CALC_CURR';

export function updateCurrencyData(state: CurrencyConverter[] , action) {

  switch (action.type) {
    case CALC_CURR:        
        return action.curvalues;              
    default:
        return state;
    }
}