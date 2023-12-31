import { Component } from '@angular/core';
import { MyAddPipe } from '../my-add.pipe';
import { MyMulPipe } from '../my-mul.pipe';
@Component({
  selector: 'app-calcy',
  standalone: true,
  imports: [ MyAddPipe,MyMulPipe],
  templateUrl: './calcy.component.html',
  styleUrl: './calcy.component.css'
})
export class CalcyComponent 
{
    public ino1: number=0;
    public ino2: number=0;
    public ino3: number=0;
    public ino4: number=0;

  //  constructor()
  //  {
  //     this.ino1=0;
  //     this.ino2=0;
  
  //  }
  //  handleInputChange(inputValue: string,value:string): void {
  //     this.input1Value = +inputValue ; // Convert input value to number and add 5
  //     this.input2Value = +value ;
  //   }
  public assin(value1: string,value2: string)
  {
    this.ino1=+value1;
    this.ino2=+value2;
    
  } 
  public assin2(value1: string,value2: string)
  {
    this.ino3=+value1;
    this.ino4=+value2;
    
  } 
  //  addInputs(ino1: string,ino2: string): number
  //  {
  //    var value1:number=+ino1;
  //    var value2:number=+ino2;
  //    var result:number=0;
  //   result = value1 + value2;
  //    return result;
  //  }
  //  sub(ino1: string,ino2: string): number
  //  {
  //    var value1:number=+ino1;
  //    var value2:number=+ino2;
  //    var result1:number=0;
  //   result1 = value1 - value2;
  //    return result1;
  //  }
  //  mult(ino1: string,ino2: string): number
  //  {
  //    var value1:number=+ino1;
  //    var value2:number=+ino2;
  //    var result2:number=0;
  //   result2 = value1 * value2;
  //    return result2;
  //  }
  //  div(ino1: string,ino2: string): number
  //  {
  //    var value1:number=+ino1;
  //    var value2:number=+ino2;
  //    var result3:number=0;
  //   result3 = value1 / value2;
  //    return result3;
  //  }
   
   
      // public sub(Value:number,Value2:number)
      // {
        
      //    this.sum=Value-Value2;
      // }
      // public mult(Value:number,Value2:number)
      // {
        
      //    this.sum=Value*Value2;
      // }
      // public div(Value:number,Value2:number)
      // {
        
      //    this.sum=Value/Value2;
      // }
}
