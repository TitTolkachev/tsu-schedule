import {DayOfWeek} from "./day-of-week";

export class LessonCreateDto {

  groupsIds: string[]
  studyRoomId: string
  lessonTypeId: string
  teacherId: string
  subjectId: string
  startDate: string
  endDate: string
  dayOfWeek: DayOfWeek
  lessonNumber: number
  frequency: number

  constructor(groupsIds: string[], studyRoomId: string, lessonTypeId: string, teacherId: string, subjectId: string, startDate: string, endDate: string, dayOfWeek: DayOfWeek, lessonNumber: number, frequency: number) {
    this.groupsIds = groupsIds;
    this.studyRoomId = studyRoomId;
    this.lessonTypeId = lessonTypeId;
    this.teacherId = teacherId;
    this.subjectId = subjectId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.dayOfWeek = dayOfWeek;
    this.lessonNumber = lessonNumber;
    this.frequency = frequency;
  }
}
