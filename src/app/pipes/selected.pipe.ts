import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'selected'
})
export class SelectedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(item => item.selected);
    /*if (value.selected) {
      return true;
    }
    return null;*/
  }

}
