import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchSubjects'
})
export class SearchSubjectsPipe implements PipeTransform {
  transform(elements: any[], value: any) {
    if (!elements) {
      return [];
    }
    if (!value) {
      return elements;
    }

    value = value.toLocaleLowerCase()

    return elements.filter(element => {
      return element.name.toLocaleLowerCase().includes(value)
    })
  }

}
