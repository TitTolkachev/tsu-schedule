import {Time} from "./time";

export class LessonTime {

  readonly lessonNumber: number
  readonly startTime: Time
  readonly endTime: Time

  constructor(lessonNumber: number, startTime: Time, endTime: Time) {
    this.lessonNumber = lessonNumber;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
