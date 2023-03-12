import {Injectable} from '@angular/core';
import {addDays, addWeeks, endOfWeek, format, getDate, getWeek, parse, startOfWeek} from "date-fns";
import {DaySchedule} from "../models/day-schedule";
import {Week} from "../pages/moderator/edit-page/models/Week";
import {Pair} from "../pages/moderator/edit-page/models/Pair";
import {formatTime} from "../models/time";
import {LessonTime} from "../models/lesson-time";
import ruLocale from "date-fns/locale/ru";
import {WeekTimeLine} from "../pages/moderator/edit-page/models/WeekTimeLine";
import {Cell} from "../pages/moderator/edit-page/models/Cell";
import {map, Observable} from "rxjs";
import {IScheduleService} from "./i-schedule.service";
import {DayOfWeeks} from "../models/day-of-week";

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
  private _currentWeek: Date = new Date()

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
   * Вернуть дату текущей выбранной недели
   */
  get currentWeek(): Date {
    return this._currentWeek
  }

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
    return this._currentWeek = addWeeks(this._currentWeek, 1)
  }

  /**
   * Возвращает и устанавливает предыдущую неделю
   */
  getAndSetPreviousWeek(): Date {
    return this._currentWeek = addWeeks(this._currentWeek, -1)
  }

  /**
   * Метод вызывается при открытии страницы расписания
   * @param weekDate день, относящийся к неделе, которую надо загрузить
   * @param options настройки
   */
  init(weekDate: Date, options: {
    lessonTimes: LessonTime[]
    cellConstructor: () => Cell
  }) {
    this.lessonTimes = options.lessonTimes
    this._currentWeek = weekDate
    this.cellConstructor = options.cellConstructor
  }

  /**
   * Метод загрузки расписания на неделю
   * @param weekDate день, относящийся к неделе, которую надо загрузить
   * @param groupsIds ID's групп, для которых надо найти раписание
   * @param teacherId ID преподавателя, для которого надо найти раписание
   * @param audienceId ID's аудитории, для которой надо найти раписание
   */
  loadWeek(
    weekDate: Date,
    groupsIds: string[],
    teacherId: string | null,
    audienceId: string | null
  ): Observable<Week[]> {
    this.lastLoadedWeek = weekDate

    let startDate = format(
      startOfWeek(weekDate, {weekStartsOn: 1}),
      'yyyy-MM-dd'
    )
    let endDate = format(
      endOfWeek(weekDate, {weekStartsOn: 1}),
      'yyyy-MM-dd'
    )

    return this.scheduleService.fetchStaffSchedule(groupsIds, teacherId, audienceId, startDate, endDate)
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
      let weekNumber = getWeek(date, {weekStartsOn: 1})

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
        let cell = line.Cells[DayOfWeeks.indexOf(day.dayOfWeek)]

        cell.Pairs.push(
          new Pair(
            lesson.id,
            lesson.subject.name,
            `${lesson.studyRoom.number} ${lesson.studyRoom.name ? lesson.studyRoom.name : ""}`,
            lesson.groups.map(e => e.number).join(','),
            lesson.lessonType.name,
            `${lesson.teacher.lastName} ${lesson.teacher.firstName} ${lesson.teacher.patronymicName}`,
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
  buildWeek(times: LessonTime[], weekDate: Date): Week {
    if (this.cellConstructor == undefined) {
      throw Error("cell constructor cannot be undefined")
    }

    let startDate = startOfWeek(weekDate, {weekStartsOn: 1})
    let endDate = addDays(endOfWeek(weekDate, {weekStartsOn: 1}), -1)

    let startDateFormatted = format(
      startDate,
      'd MMMM yyyy',
      {locale: ruLocale}
    )
    let endDateFormatted = format(
      endDate,
      'd MMMM yyyy',
      {locale: ruLocale}
    )
    let weekNumber = getWeek(weekDate, {weekStartsOn: 1})

    return {
      WeekDate: `${startDateFormatted} - ${endDateFormatted} • ${weekNumber} неделя`,
      WeekDays: Array.from({length: 6}, (_, i) => {
        return getDate(addDays(startDate, i))
      }),
      WeekTimeLines: times.map(time => {
        let line: WeekTimeLine = {
          TimeStart: formatTime(time.startTime),
          TimeEnd: formatTime(time.endTime),
          Cells: Array.from({length: 6}, (_, i) => {
            let cell = this.cellConstructor!()

            cell.DayOfWeek = i
            cell.CellTime = time
            cell.CellDate = addDays(startDate, i)

            return cell
          })
        }
        return line
      })
    }
  }
}
