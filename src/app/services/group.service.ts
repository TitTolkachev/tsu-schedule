import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Group} from "../models/group";
import {Observable} from "rxjs";
import {SERVER_URL, TOKEN_KEY} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchGroup(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(
      `${SERVER_URL}/group`
    )
  }

  createGroup(number: string): Observable<any> {
    return this.httpClient.post(
      `${SERVER_URL}/group`,
      {
        number: number
      }
    )
  }

  modifyGroup(group: Group): Observable<any> {
    return this.httpClient.put(
      `${SERVER_URL}/group`,
      {
        id: group.id,
        number: group.number
      }
    )
  }

  deleteGroup(id: string): Observable<any> {
    return this.httpClient.delete(
      `${SERVER_URL}/group/${id}`
    )
  }
}
