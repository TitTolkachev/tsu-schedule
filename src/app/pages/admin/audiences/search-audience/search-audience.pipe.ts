import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchAudienceName'
})
export class SearchAudienceNamePipe implements PipeTransform {

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

@Pipe({
  name: 'searchAudienceFrame'
})
export class SearchAudienceFramePipe implements PipeTransform {
  transform(elements: any[], value: any) {
    if (!elements) {
      return [];
    }

    if (!value) {
      return elements;
    }

    value = value.toLocaleLowerCase()

    return elements.filter(element => {
      return element.frame.toString().toLocaleLowerCase().includes(value)
    })
  }

}

@Pipe({
  name: 'searchAudienceNumber'
})
export class SearchAudienceNumberPipe implements PipeTransform {
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
