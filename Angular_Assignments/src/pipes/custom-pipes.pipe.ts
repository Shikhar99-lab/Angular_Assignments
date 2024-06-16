import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes',
  standalone: true
})
export class CustomPipesPipe implements PipeTransform {

  transform(values: any[], ...args: string[]): unknown {
    return values.filter(
      value => value[args[0]] == args[1]);
  }

}
