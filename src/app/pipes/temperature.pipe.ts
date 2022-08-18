import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, unite: 'c' | 'f'): string | number {
    return unite === 'c'
      ? ((value - 32) * 5) / 9 + ' °C'
      : unite === 'f'
      ? value * (9 / 5) + 32 + ' F'
      : value;
  }
}
