import {LessonTime} from "../models/lesson-time";
import {DaySchedule} from "../models/day-schedule";

export abstract class IScheduleService {

  abstract fetchLessonTimes(): LessonTime[]

  abstract fetchSchedule(
    startDate: string,
    endDate: string
  ): DaySchedule[]

  abstract fetchTeacherSchedule(
    teacherId: string,
    startDate: string,
    endDate: string
  ): DaySchedule[]

  abstract fetchGroupSchedule(
    groupId: string,
    startDate: string,
    endDate: string
  ): DaySchedule[]

  abstract fetchStaffSchedule(
    groupIds: string[],
    teacherId: string,
    audienceId: string,
    startDate: string,
    endDate: string
  ): DaySchedule[]

}
