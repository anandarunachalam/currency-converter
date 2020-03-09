import { AbstractControl } from '@angular/forms'

export function currencyConverterValidator (
  control: AbstractControl
): { [key: string]: any } | null {

  const valid = /^\$?[0-9][0-9,]*[0-9]\.?[0-9]{0,2}$/i.test(control.value)
  console.log(valid)
  return valid  ? null  : { invalidCurrency: { valid: false, value: control.value } }
}