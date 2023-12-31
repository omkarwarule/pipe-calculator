import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd',
  standalone: true
})
export class MyAddPipe implements PipeTransform {

  transform(first: number, second: number): number 
  {
    return first+second;
  }

}
