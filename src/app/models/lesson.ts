import {Group} from "./group";
import {Audience} from "./audience";
import {Teacher} from "./teacher";
import {Subject} from "./subject";
import {LessonTime} from "./lesson-time";
import {LessonType} from "./lesson-type";

export class Lesson {

  readonly id: string
  readonly groups: Group[]
  readonly studyRoom: Audience
  readonly lessonType: LessonType
  readonly teacher: Teacher
  readonly subject: Subject
  readonly startDate: string
  readonly endDate: string
  readonly frequency: number
  readonly lessonTime: LessonTime

  constructor(id: string, groups: Group[], studyRoom: Audience, lessonType: LessonType, teacher: Teacher, subject: Subject, startDate: string, endDate: string, frequency: number, lessonTime: LessonTime) {
    this.id = id;
    this.groups = groups;
    this.studyRoom = studyRoom;
    this.lessonType = lessonType;
    this.teacher = teacher;
    this.subject = subject;
    this.endDate = endDate;
    this.startDate = startDate;
    this.frequency = frequency;
    this.lessonTime = lessonTime;
  }
}
