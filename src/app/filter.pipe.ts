import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): any[] {
    let searchText = args[0];

    return value.filter(a=>
      searchText == "" || a.title.toLowerCase().includes(searchText.toLowerCase() || a.discription.toLowerCase(). includes(searchText.toLowerCase())));
  }

}
