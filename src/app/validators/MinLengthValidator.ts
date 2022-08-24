import { AbstractControl } from '@angular/forms';

export const MinLengthValidator = (
  length: number,
  message: string = 'string too short'
) => {
  return (control: AbstractControl) => {
    const value: string = control.value;

    if (!value) {
      return null;
    }

    if (value.length < length) {
      return { min: message };
    }
    return null;
  };
};
