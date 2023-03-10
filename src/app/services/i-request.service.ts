import {Observable} from "rxjs";
import {GroupRequest} from "../models/group-request";
import {RegistrationRequest} from "../models/registration-request";

export abstract class IRequestService {

  abstract fetchRegistrationRequest(): Observable<RegistrationRequest[]>

  abstract fetchGroupRequest(): Observable<GroupRequest[]>

  abstract resolveRegistrationRequest(
    userId: string,
    accept: boolean
  ): Observable<void>

  abstract resolveGroupRequest(
    groupId: string,
    accept: boolean
  ): Observable<void>

}
