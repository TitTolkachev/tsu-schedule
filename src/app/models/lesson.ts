import {Group} from "./group";
import {Audience} from "./audience";
import {Teacher} from "./teacher";
import {Subject} from "./subject";
import {LessonTime} from "./lesson-time";
import {LessonType} from "./lesson-type";

export class Lesson {

  id: string
  groups: Group[]
  studyRoom: Audience
  lessonType: LessonType
  teacher: Teacher
  subject: Subject
  lessonTime: LessonTime
  
  constructor(id: string, groups: Group[], studyRoom: Audience, lessonType: LessonType, teacher: Teacher, subject: Subject, lessonTime: LessonTime) {
    this.id = id;
    this.groups = groups;
    this.studyRoom = studyRoom;
    this.lessonType = lessonType;
    this.teacher = teacher;
    this.subject = subject;
    this.lessonTime = lessonTime;
  }
}
