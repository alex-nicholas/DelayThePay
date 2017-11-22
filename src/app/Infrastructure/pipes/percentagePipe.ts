import { Pipe, PipeTransform } from '@angular/core';
/*
 *  Make a percentage value from a number
 * Usage:
 *   value | toPercentage
 * Example:
 *   {{ 2 | toPercentage }}
 *   formats to: 2%
*/
@Pipe({name: 'toPercentage'})
export class ToPercentPipe implements PipeTransform {
  transform(value: number): string {
    return value + '%';
  }
}
