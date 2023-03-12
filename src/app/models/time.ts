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

export function formatTime(time: Time): string {
  return `${time.hour}:${time.minute < 10 ? '0' : ''}${time.minute}`
}
