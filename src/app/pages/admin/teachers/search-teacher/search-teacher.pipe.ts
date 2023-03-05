import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchTeacher'
})
export class SearchTeacherPipe implements PipeTransform {
  transform(elements: any[], value: any) {
    if (!elements) {
      return [];
    }
    if (!value) {
      return elements;
    }

    value = value.toLocaleLowerCase()

    return elements.filter(element => {
      return element.fullName.toLocaleLowerCase().includes(value)
    })
  }
}
