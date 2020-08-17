import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
})
export class NoimagePipe implements PipeTransform {
  transform(images: any[]): string {
    let url = '';
    if (!images || images.length === 0) {
      url = 'assets/img/noimage.png';
    } else {
      url = images[0].url;
    }

    return url;
  }
}
