import { AbstractControl, ValidatorFn } from '@angular/forms';

// export function forbiddenNameValidator(
//   control: AbstractControl
// ): { [key: string]: any } | any {
//   const forbiddenName = /admin/.test(control.value);
//   return forbiddenName ? { forbiddenName: { value: control.value } } : null;
// }

export function forbiddenNameValidator(_value: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const _forbiddenvalue = _value.test(control.value);
    return _forbiddenvalue ? { '_forbiddenvalue': { value: control.value } } : null;
  };
}
