export class Time {

  hour: number
  minute: number
  second: number
  nano: number

  constructor(hour: number, minute: number, second: number, nano: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
    this.nano = nano;
  }
}
