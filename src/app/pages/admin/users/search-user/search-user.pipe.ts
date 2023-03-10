import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter( (item: any) => {
      return JSON.stringify(item).toLowerCase().includes(args);
    })
  }
}
