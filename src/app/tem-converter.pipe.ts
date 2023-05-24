import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temConverter'
})
export class TemConverterPipe implements PipeTransform {

  transform(value: number, unit:String): unknown {
    if(value && !isNaN(value)) {
            if (unit === 'C') {
                const temperature = (value - 32) /1.8 ;
                return temperature.toFixed(2);
            } else if (unit === 'F'){
                const temperature = (value * 1.8 ) + 32
                return temperature.toFixed(2);
            }
        }
        return;
  }

}
