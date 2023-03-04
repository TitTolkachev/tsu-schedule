import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Subject} from "../../models/subject";
import {ISubjectService} from "../i-subject.service";

@Injectable({
  providedIn: 'root'
})
export class SubjectMockService implements ISubjectService {

  private subjects: Subject[] = [
    new Subject("0", "Математический анализ"),
    new Subject("1", "Алгебра"),
    new Subject("2", "Основы командной разработки")
  ]
  private counter = 3

  constructor() {}

  fetchSubjects(): Observable<Subject[]> {
    return of(this.subjects)
  }

  createSubject(
    name: string
  ): Observable<any> {
    this.subjects.push(new Subject(
      (this.counter++).toString(),
      name
    ))
    return of(null)
  }

  modifySubject(subject: Subject): Observable<any> {
    let index = this.subjects.findIndex(e => e.id == subject.id)
    if (index > -1) {
      this.subjects[index] = subject
    }
    return of(null)
  }

  deleteSubject(id: string): Observable<any> {
    let index = this.subjects.findIndex(e => e.id == id)
    if (index > -1) {
      this.subjects.splice(index, 1)
    }
    return of(null)
  }
}
