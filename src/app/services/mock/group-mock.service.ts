import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Group} from "../../models/group";

@Injectable({
  providedIn: 'root'
})
export class GroupMockService {

  private groups: Group[] = [
    new Group("0", "972101"),
    new Group("1", "972102"),
    new Group("2", "972103")
  ]

  fetchGroups(): Observable<Group[]> {
    return of(this.groups)
  }

  createGroup(number: string): Observable<any> {
    this.groups.push(new Group(this.groups.length.toString(), number))
    return of(null)
  }

  modifyGroup(group: Group): Observable<any> {
    let index = this.groups.findIndex(e => e.id == group.id)
    if (index > -1) {
      this.groups[index] = group
    }
    return of(null)
  }

  deleteGroup(id: string): Observable<any> {
    let index = this.groups.findIndex(e => e.id == id)
    if (index > -1) {
      this.groups.splice(index, 1)
    }
    return of(null)
  }
}
