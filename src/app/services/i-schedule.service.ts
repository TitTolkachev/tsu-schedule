import {LessonTime} from "../models/lesson-time";
import {DaySchedule} from "../models/day-schedule";
import {Observable} from "rxjs";

export abstract class IScheduleService {

  abstract fetchLessonTimes(): Observable<LessonTime[]>

  abstract fetchSchedule(
    startDate: string,
    endDate: string
  ): Observable<DaySchedule[]>

  abstract fetchTeacherSchedule(
    teacherId: string,
    startDate: string,
    endDate: string
  ): Observable<DaySchedule[]>

  abstract fetchGroupSchedule(
    groupId: string,
    startDate: string,
    endDate: string
  ): Observable<DaySchedule[]>

  abstract fetchStaffSchedule(
    groupIds: string[],
    teacherId: string | null,
    audienceId: string | null,
    startDate: string,
    endDate: string
  ): Observable<DaySchedule[]>

}
