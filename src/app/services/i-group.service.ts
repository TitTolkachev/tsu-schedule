import {Observable} from "rxjs";
import {Group} from "../models/group";

export abstract class IGroupService {

  abstract fetchGroups(): Observable<Group[]>

  abstract createGroup(
    number: string
  ): Observable<any>

  abstract modifyGroup(group: Group): Observable<any>

  abstract deleteGroup(id: string): Observable<any>

}
