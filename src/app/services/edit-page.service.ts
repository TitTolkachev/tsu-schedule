import {Injectable} from '@angular/core';
import {addWeeks, endOfWeek, format, getWeek, parse, startOfWeek} from "date-fns";
import {DaySchedule} from "../models/day-schedule";
import {Week} from "../pages/moderator/edit-page/models/Week";
import {indexOf} from "../models/day-of-week";
import {Pair} from "../pages/moderator/edit-page/models/Pair";
import {formatTime} from "../models/time";
import {LessonTime} from "../models/lesson-time";
import ruLocale from "date-fns/locale/ru";
import {WeekTimeLine} from "../pages/moderator/edit-page/models/WeekTimeLine";
import {Cell} from "../pages/moderator/edit-page/models/Cell";
import {map, Observable, switchMap, tap} from "rxjs";
import {IScheduleService} from "./i-schedule.service";

@Injectable({
  providedIn: 'root'
})
export class EditPageService {

  /**
   * Время пар, полученные с сервера
   */
  private lessonTimes: LessonTime[] | undefined

  /**
   * Дата текущей недели. Используется для вычисления
   * следующей и предыдущей недели.
   */
  private currentWeek: Date = new Date()

  /**
   * Дата последней подгруженной недели. Используется для
   * подгрузки ещё одной недели с помощью кнопки.
   */
  private lastLoadedWeek: Date | undefined

  /**
   * Конструктор клеточек
   */
  private cellConstructor: (() => Cell) | undefined

  constructor(
    private scheduleService: IScheduleService
  ) { }

  /**
   * Возвращает следующую неделю на добавление
   */
  getNextWeekToAdd() {
    if (this.lastLoadedWeek == undefined) {
      throw Error("It hasn't been uploaded in a week yet")
    }
    return addWeeks(this.lastLoadedWeek, 1)
  }

  /**
   * Возвращает и устанавливает следующую неделю
   */
  getAndSetNextWeek(): Date {
    return this.currentWeek = addWeeks(this.currentWeek, 1)
  }

  /**
   * Возвращает и устанавливает предыдущую неделю
   */
  getAndSetPreviousWeek(): Date {
    return this.currentWeek = addWeeks(this.currentWeek, -1)
  }

  /**
   * Метод вызывается при открытии страницы расписания
   * @param weekDate день, относящийся к неделе, которую надо загрузить
   * @param options настройки
   */
  initAndLoadWeek(weekDate: Date, options: {
    cellConstructor: () => Cell
  }): Observable<Week[]> {
    this.lessonTimes = undefined
    this.currentWeek = weekDate
    this.cellConstructor = options.cellConstructor
    return this.scheduleService.fetchLessonTimes()
      .pipe(tap(lessonTimes => {
        this.lessonTimes = lessonTimes
      }))
      .pipe(switchMap(() => {
        return this.loadWeek(this.currentWeek)
      }))
  }

  /**
   * Метод загрузки недели
   * @param weekDate день, относящийся к неделе, которую надо загрузить
   */
  loadWeek(weekDate: Date): Observable<Week[]> {
    this.lastLoadedWeek = weekDate

    let startDate = format(
      startOfWeek(weekDate, {weekStartsOn: 1}),
      'yyyy-MM-dd'
    )
    let endDate = format(
      endOfWeek(weekDate, {weekStartsOn: 1}),
      'yyyy-MM-dd'
    )

    return this.scheduleService.fetchSchedule(startDate, endDate)
      .pipe(map(days => this.transformWeeks(days)))
  }

  /**
   * Метод конвертации данных с сервера в массив недель
   * @param days массив расписаний по дням
   */
  private transformWeeks(days: DaySchedule[]): Week[] {
    let map = new Map<number, DaySchedule[]>()

    days.forEach(day => {
      let date = parse(day.date, 'yyyy-MM-dd', new Date())
      let weekNumber = getWeek(date)

      if (map.has(weekNumber)) {
        map.get(weekNumber)?.push(day)
      }
      else {
        map.set(weekNumber, [day])
      }
    })

    return Array.from(map.values()).map(daysInWeek => {
      return this.transformWeek(daysInWeek)
    })
  }

  /**
   * Метод конвертации данных с сервера в неделю
   * @param days массив расписаний по дням
   */
  private transformWeek(days: DaySchedule[]): Week {
    if (days.length === 0) {
      throw Error("days cannot be empty")
    }
    if (this.lessonTimes == undefined) {
      throw Error("lesson times cannot be undefined")
    }

    let day = days[0]
    let weekDate = parse(day.date, 'yyyy-MM-dd', new Date())
    let week = this.buildWeek(this.lessonTimes, weekDate)

    days.forEach(day => {
      day.lessons.forEach(lesson => {
        let line = week.WeekTimeLines[lesson.lessonTime.lessonNumber - 1]
        let cell = line.Cells[indexOf(day.dayOfWeek)]

        cell.Pairs.push(
          new Pair(
            lesson.subject.name,
            `${lesson.studyRoom.number} ${lesson.studyRoom.name}`,
            lesson.groups.map(e => e.number).join(','),
            lesson.lessonType.name,
            lesson.teacher.fullName,
            day.date,
            `${formatTime(lesson.lessonTime.startTime)} - ${formatTime(lesson.lessonTime.endTime)}`
          ),
        )
      })
    })
    return week
  }

  /**
   * Метод построения недели на основе времени пар
   * @param times время пар
   * @param weekDate любая дата в неделе
   * @private
   */
  private buildWeek(times: LessonTime[], weekDate: Date): Week {
    if (this.cellConstructor == undefined) {
      throw Error("cell constructor cannot be undefined")
    }

    let startDate = format(
      startOfWeek(weekDate, {weekStartsOn: 1}),
      'd MMMM yyyy',
      {locale: ruLocale}
    )
    let endDate = format(
      endOfWeek(weekDate, {weekStartsOn: 1}),
      'd MMMM yyyy',
      {locale: ruLocale}
    )
    let weekNumber = getWeek(weekDate)

    return {
      WeekDate: `${startDate} - ${endDate} • ${weekNumber} неделя`,
      WeekDays: [...Array(6).keys()],
      WeekTimeLines: times.map(time => {
        let line: WeekTimeLine = {
          TimeStart: formatTime(time.startTime),
          TimeEnd: formatTime(time.endTime),
          Cells: Array.from({length: 6}, () => {
            return this.cellConstructor!()
          })
        }
        return line
      })
    }
  }
}
