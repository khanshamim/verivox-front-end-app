import { Pipe, PipeTransform } from '@angular/core';

@Pipe({  name: 'dataSize' })
export class dataSizePipe implements PipeTransform {

    transform(size: any, extension: string = 'Mbit/s'): any {
        let dataSize = 0;
        if(size){
            //TODO: Make a Enum for exntension - validate from that enum
            if(extension == 'kbit/s'){
                dataSize = size / 1000; 
            }else{
                
                dataSize = size;
            }
        }
        return dataSize;
    };
}