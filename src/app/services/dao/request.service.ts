import {Injectable} from '@angular/core';
import {IRequestService} from "../i-request.service";
import {Observable} from "rxjs";
import {GroupRequest} from "../../models/group-request";
import {RegistrationRequest} from "../../models/registration-request";
import {SERVER_URL} from "../../constants";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService implements IRequestService {

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchGroupRequest(): Observable<GroupRequest[]> {
    return this.httpClient.get<GroupRequest[]>(
      `${SERVER_URL}/request/group`
    )
  }

  fetchRegistrationRequest(): Observable<RegistrationRequest[]> {
    return this.httpClient.get<GroupRequest[]>(
      `${SERVER_URL}/request/registration`
    )
  }

  resolveGroupRequest(groupId: string, accept: boolean): Observable<void> {
    return this.httpClient.put<void>(
      `${SERVER_URL}/request/group/${groupId}?accept=${accept}`,
      {}
    )
  }

  resolveRegistrationRequest(userId: string, accept: boolean): Observable<void> {
    return this.httpClient.put<void>(
      `${SERVER_URL}/request/registration/${userId}?accept=${accept}`,
      {}
    )
  }
}
