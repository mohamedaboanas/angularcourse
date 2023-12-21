import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  transform(size : number, extension: string): any {
    return (size / Math.pow(1024,2)).toFixed(2) + " " + extension;
  }

}
