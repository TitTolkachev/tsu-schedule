import {LessonTime} from "../models/lesson-time";
import {DaySchedule} from "../models/day-schedule";
import {Observable} from "rxjs";

export abstract class IScheduleService {

  abstract fetchLessonTimes(): Observable<LessonTime[]>

  abstract fetchStaffSchedule(
    groupIds: string[],
    teacherId: string | null,
    audienceId: string | null,
    startDate: string,
    endDate: string
  ): Observable<DaySchedule[]>

}
