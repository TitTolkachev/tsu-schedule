import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SERVER_URL} from "../../constants";
import {ITeacherService} from "../i-teacher.service";
import {Teacher} from "../../models/teacher";

@Injectable({
  providedIn: 'root'
})
export class TeacherService implements ITeacherService {

  constructor(
    private httpClient: HttpClient
  ) {}

  fetchTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(
      `${SERVER_URL}/teacher`
    )
  }

  createTeacher(
    firstName: string,
    lastName: string,
    patronymicName: string
  ): Observable<any> {
    return this.httpClient.post(
      `${SERVER_URL}/teacher`,
      {
        firstName: firstName,
        lastName: lastName,
        patronymicName: patronymicName
      }
    )
  }

  modifyTeacher(teacher: Teacher): Observable<any> {
    return this.httpClient.put(
      `${SERVER_URL}/teacher`,
      {
        id: teacher.id,
        firstName: teacher.firstName,
        lastName: teacher.lastName,
        patronymicName: teacher.patronymicName
      }
    )
  }

  deleteTeacher(id: string): Observable<any> {
    return this.httpClient.delete(
      `${SERVER_URL}/teacher/${id}`
    )
  }
}
