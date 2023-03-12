import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchAudienceName'
})
export class SearchAudienceNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter( (item: any) => {
      return JSON.stringify(item.name).toLowerCase().includes(args);
    })
  }

}

@Pipe({
  name: 'searchAudienceFrame'
})
export class SearchAudienceFramePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter( (item: any) => {
      return JSON.stringify(item.buildingNumber.toString()).toLowerCase().includes(args);
    })
  }

}

@Pipe({
  name: 'searchAudienceNumber'
})
export class SearchAudienceNumberPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter( (item: any) => {
      return JSON.stringify(item.number).toLowerCase().includes(args);
    })
  }

}
