import {Time} from "./time";

export class LessonTime {

  lessonNumber: number
  startTime: Time
  endTime: Time

  constructor(lessonNumber: number, startTime: Time, endTime: Time) {
    this.lessonNumber = lessonNumber;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
