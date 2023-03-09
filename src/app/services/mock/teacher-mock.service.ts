import {Injectable} from '@angular/core';
import {ITeacherService} from "../i-teacher.service";
import {Observable, of} from "rxjs";
import {Teacher} from "../../models/teacher";

@Injectable({
  providedIn: 'root'
})
export class TeacherMockService implements ITeacherService {

  private teachers: Teacher[] = [
    new Teacher("0", "Денис", "Змеев", "Олегович"),
    new Teacher("1", "Диана", "Даммер", "Дамировна"),
    new Teacher("2", "Алексей", "Бабанов", "Михайлович")
  ]
  private counter = 3

  constructor() {}

  fetchTeachers(): Observable<Teacher[]> {
    return of(this.teachers)
  }

  createTeacher(
    firstName: string,
    lastName: string,
    patronymicName: string
  ): Observable<any> {
    this.teachers.push(new Teacher(
      (this.counter++).toString(),
      firstName,
      lastName,
      patronymicName
    ))
    return of(null)
  }

  modifyTeacher(teacher: Teacher): Observable<any> {
    let index = this.teachers.findIndex(e => e.id == teacher.id)
    if (index > -1) {
      this.teachers[index] = teacher
    }
    return of(null)
  }

  deleteTeacher(id: string): Observable<any> {
    let index = this.teachers.findIndex(e => e.id == id)
    if (index > -1) {
      this.teachers.splice(index, 1)
    }
    return of(null)
  }
}
