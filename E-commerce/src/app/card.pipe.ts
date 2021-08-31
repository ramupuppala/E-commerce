//ng dependencies
import { Pipe, PipeTransform } from '@angular/core';

//pipe transform name
@Pipe({
  name: 'card'
})

//CardPipe class
export class CardPipe implements PipeTransform {

  //transform method, it is sorting String
  transform(value: any, searchString: string,propString:string): any {
    if(value.length==0 || searchString === '') 
    {
      return value;
    }
    const resultArray=[];
    for(const item of value)
    {
      if(!item[propString].toUpperCase().search(searchString.toUpperCase()) )
      {
        resultArray.push(item);
        console.log(item[propString])
      }
     
    }
    return resultArray;
    
  }

}
