import {Injectable} from '@angular/core';
import {IRequestService} from "../i-request.service";
import {delay, Observable, of} from "rxjs";
import {GroupRequest} from "../../models/group-request";
import {RegistrationRequest} from "../../models/registration-request";
import {Group} from "../../models/group";

@Injectable({
  providedIn: 'root'
})
export class RequestMockService implements IRequestService {

  private groupCounter = 1
  private registrationCounter = 1

  private groupRequests: GroupRequest[] = [
    new GroupRequest(
      (this.groupCounter++).toString(),
      {
        id: "1",
        firstName: "Татьяна",
        lastName: "Аникушина",
        patronymicName: "Андреевна",
        role: "Student",
        group: new Group("3", "972103"),
        teacherId: null,
        email: "sd@mail.com",
      },
      new Group("1", "972101")
    ),
    new GroupRequest(
      (this.groupCounter++).toString(),
      {
        id: "2",
        firstName: "Алексей",
        lastName: "Феофилов",
        patronymicName: "Дмитриевич",
        role: "Student",
        group: new Group("2", "972102"),
        teacherId: null,
        email: "fefe@mail.com",
      },
      new Group("1", "972101")
    ),
    new GroupRequest(
      (this.groupCounter++).toString(),
      {
        id: "3",
        firstName: "Роман",
        lastName: "Аникушин",
        patronymicName: "Евгеньевич",
        role: "Student",
        group: new Group("1", "972101"),
        teacherId: null,
        email: "roma@mail.com",
      },
      new Group("3", "972103")
    )
  ]

  private registrationRequests: RegistrationRequest[] = [
    new RegistrationRequest(
      (this.registrationCounter++).toString(),
      {
        id: "4",
        firstName: "Диана",
        lastName: "Даммер",
        patronymicName: "Дамировна",
        role: "Teacher",
        group: null,
        teacherId: null,
        email: "3d@mail.com",
      },
    ),
    new RegistrationRequest(
      (this.registrationCounter++).toString(),
      {
        id: "5",
        firstName: "Елизавета",
        lastName: "Глазкина",
        patronymicName: "Федеровна",
        role: "Student",
        group: new Group("1", "972101"),
        teacherId: null,
        email: "eliz@mail.com",
      },
    )
  ]

  constructor() { }

  fetchGroupRequest(): Observable<GroupRequest[]> {
    return of(this.groupRequests).pipe(delay(1000));
  }

  fetchRegistrationRequest(): Observable<RegistrationRequest[]> {
    return of(this.registrationRequests).pipe(delay(1000));
  }

  resolveGroupRequest(groupId: string, accept: boolean): Observable<void> {
    let index = this.groupRequests.findIndex(e => e.id == groupId)
    if (index > -1) {
      this.groupRequests.splice(index, 1)
    }
    return of(undefined).pipe(delay(1000))
  }

  resolveRegistrationRequest(userId: string, accept: boolean): Observable<void> {
    let index = this.registrationRequests.findIndex(e => e.id == userId)
    if (index > -1) {
      this.registrationRequests.splice(index, 1)
    }
    return of(undefined).pipe(delay(1000))
  }
}
