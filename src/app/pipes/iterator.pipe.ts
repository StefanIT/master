import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iterator'
})
export class IteratorPipe implements PipeTransform {

  transform(value: any): any {
    const iterable = {};
    iterable[Symbol.iterator] = function* (){
      let n = 0;
      while(n < value){
        yield ++n; // yield = 1 element niza kroz koji se prolazi
      }
    };
    return iterable;
  }

}
