import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demoPipe',
})
export class DemoPipePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): number {
    return (value * 9) / 5 + 32;
  }
}
