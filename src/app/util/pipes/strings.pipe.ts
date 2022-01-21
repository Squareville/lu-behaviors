import { Pipe, PipeTransform } from '@angular/core';
import { DB_BrickColors } from '../../../defs/cdclient';

@Pipe({name: 'replace'})
export class ReplacePipe implements PipeTransform {
  transform(value: string, pattern: string, instead:string): string {
    if (value) {
      let re = new RegExp(pattern, 'g');
      return value.replace(re, instead);
    }
    return value;
  }
}

@Pipe({name: 'percent'})
export class PercentPipe implements PipeTransform {
  transform(value) : any {
    let percent = 100 * value;
    return 100 + '%';
  }
}

@Pipe({name: 'to'})
export class ToPipe implements PipeTransform {
  transform(value: number, other: number) : string {
    if (value == other) return String(value);
    return value + " to " + other;
  }
}

@Pipe({name: 'num'})
export class ToNumPipe implements PipeTransform {
  transform(value: string) : number {
    return +value;
  }
}

@Pipe({name: 'toRGBA'})
export class ToRGBAPipe implements PipeTransform {
  transform(color: DB_BrickColors): string {
    var comp = [color.red, color.green, color.blue];
    comp = comp.map(x => x * 255);
    comp.push(color.alpha);
    return "rgba(" + comp.join(',') + ")";
  }
}