import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oddEven',
})
export class OddEvenPipe implements PipeTransform {
  transform(value: number): any {
    return value % 2 === 0 ? `even ${value}` : `odd ${value}`;
  }
}
