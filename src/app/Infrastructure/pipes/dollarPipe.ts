import { Pipe, PipeTransform } from '@angular/core';
/*
 *  Make a dollar value from a number
 * Usage:
 *   value | dollars
 * Example:
 *   {{ 2 | dollars }}
 *   formats to: $2
*/
@Pipe({name: 'dollars'})
export class DollarsPipe implements PipeTransform {
  transform(value: number): string {
    return '$' + value;
  }
}
