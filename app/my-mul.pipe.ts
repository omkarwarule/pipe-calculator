import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMul',
  standalone: true
})
export class MyMulPipe implements PipeTransform {

  transform(first: number, second: number): number 
  {
    return first*second;
  }

}
