import {Injectable} from '@angular/core';
import {IScheduleService} from "../i-schedule.service";
import {Observable, of} from "rxjs";
import {DaySchedule} from "../../models/day-schedule";
import {LessonTime} from "../../models/lesson-time";

@Injectable({
  providedIn: 'root'
})
export class ScheduleMockService implements IScheduleService {

  constructor() { }

  fetchGroupSchedule(groupId: string, startDate: string, endDate: string): Observable<DaySchedule[]> {
    return of([]);
  }

  fetchLessonTimes(): Observable<LessonTime[]> {
    return of([]);
  }

  fetchSchedule(startDate: string, endDate: string): Observable<DaySchedule[]> {
    return of([]);
  }

  fetchStaffSchedule(groupIds: string[], teacherId: string, audienceId: string, startDate: string, endDate: string): Observable<DaySchedule[]> {
    return of([]);
  }

  fetchTeacherSchedule(teacherId: string, startDate: string, endDate: string): Observable<DaySchedule[]> {
    return of([]);
  }
}
