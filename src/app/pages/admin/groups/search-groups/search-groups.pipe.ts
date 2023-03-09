import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchGroups'
})
export class SearchGroupsPipe implements PipeTransform {

  transform(elements: any[], value: any) {
    if (!elements) {
      return [];
    }
    if (!value) {
      return elements;
    }

    value = value.toLocaleLowerCase()

    return elements.filter(element => {
      return element.number.toLocaleLowerCase().includes(value)
    })
  }
}
