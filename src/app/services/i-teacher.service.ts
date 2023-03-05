import {Observable} from "rxjs";
import {Teacher} from "../models/teacher";

export abstract class ITeacherService {

  abstract fetchTeachers(): Observable<Teacher[]>

  abstract createTeacher(
    firstName: string,
    lastName: string,
    patronymicName: string
  ): Observable<any>

  abstract modifyTeacher(teacher: Teacher): Observable<any>

  abstract deleteTeacher(id: string): Observable<any>

}
