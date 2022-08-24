import { AbstractControl } from '@angular/forms';

export const MinLengthValidator = (length: number) => {
  return (control: AbstractControl) => {
    const value: string = control.value;

    if (!value) {
      return null;
    }

    if (value.length < length) {
      return { min: 'string too short !' };
    }
    return null;
  };
};
