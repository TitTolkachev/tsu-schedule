import {Observable} from "rxjs";
import {Subject} from "../models/subject";

export abstract class ISubjectService {

  abstract fetchSubjects(): Observable<Subject[]>

  abstract createSubject(
    name: string
  ): Observable<any>

  abstract modifySubject(subject: Subject): Observable<any>

  abstract deleteSubject(id: string): Observable<any>

}
