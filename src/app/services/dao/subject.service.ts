import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SERVER_URL} from "../../constants";
import {Subject} from "../../models/subject";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchSubjects(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(
      `${SERVER_URL}/subject`
    )
  }

  createSubject(name: string): Observable<any> {
    return this.httpClient.post(
      `${SERVER_URL}/subject`,
      {
        name: name
      }
    )
  }

  modifySubject(subject: Subject): Observable<any> {
    return this.httpClient.put(
      `${SERVER_URL}/subject`,
      {
        id: subject.id,
        name: subject.name
      }
    )
  }

  deleteSubject(id: string): Observable<any> {
    return this.httpClient.delete(
      `${SERVER_URL}/subject/${id}`
    )
  }
}
