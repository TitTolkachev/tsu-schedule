import {Component, OnInit} from '@angular/core';
import {DropDownInput} from "./drop-down-input";
import {GroupInput} from "./group-input";
import {State} from "./models/State";
import {Pair} from "./models/Pair";
import {Week} from "./models/Week";
import {Cell} from "./models/Cell";
import {ILessonService} from "../../../services/i-lesson.service";
import {DisplayErrorComponent} from "../../../components/util/display-error";
import {EditPageService} from "../../../services/edit-page.service";
import {ISubjectService} from "../../../services/i-subject.service";
import {Subject} from "../../../models/subject";
import {LessonType} from "../../../models/lesson-type";
import {LessonTime} from "../../../models/lesson-time";
import {Group} from "../../../models/group";
import {Audience} from "../../../models/audience";
import {Teacher} from "../../../models/teacher";
import {combineLatest, mergeMap, Observable, tap} from "rxjs";
import {IGroupService} from "../../../services/i-group.service";
import {IAudienceService} from "../../../services/i-audience.service";
import {ITeacherService} from "../../../services/i-teacher.service";
import {IScheduleService} from "../../../services/i-schedule.service";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent extends DisplayErrorComponent implements OnInit {

  // TODO(Вынести в отдельный класс)
  get SelectedSubject(): string | null {
    let returnVal = null
    let input = document.getElementById('input1') as HTMLInputElement
    if (input != null) {
      let inputValue = input.value.trim()
      if (inputValue != '') {
        this.subjects?.forEach((e) => {
          if (e.name.trim().toUpperCase() == inputValue.toUpperCase())
            returnVal = e.id
        })
      }
    }
    return returnVal
  }

  get SelectedPairType(): string | null {
    let returnVal = null
    let input = document.getElementById('input2') as HTMLInputElement
    if (input != null) {
      let inputValue = input.value.trim()
      if (inputValue != '') {
        this.lessonTypes?.forEach((e) => {
          if (e.name.trim().toUpperCase() == inputValue.toUpperCase())
            returnVal = e.id
        })
      }
    }
    return returnVal
  }

  get SelectedWeekDay(): string | null {
    let returnVal = null
    let input = document.getElementById('input3') as HTMLInputElement
    if (input != null) {
      let inputValue = input.value.trim()
      if (inputValue != '') {
        this.weekDays?.forEach((e) => {
          if (e.name.trim().toUpperCase() == inputValue.toUpperCase())
            returnVal = e.id
        })
      }
    }
    return returnVal
  }

  get SelectedTime(): string | null {
    let returnVal = null
    let input = document.getElementById('input4') as HTMLInputElement
    if (input != null) {
      let inputValue = input.value.trim()
      if (inputValue != '') {
        this.lessonTimes?.forEach((e) => {
          let timeStart = e.startTime.hour.toString() + ':' + e.startTime.minute.toString()
          let timeEnd = '-' + e.endTime.hour.toString() + ':' + e.endTime.minute.toString()
          if (inputValue.toUpperCase().includes(timeStart.toUpperCase()) && inputValue.toUpperCase().includes(timeEnd.toUpperCase()))
            returnVal = e.lessonNumber
        })
      }
    }
    return returnVal
  }

  get SelectedGroups(): string[] | null {
    let returnVal: string[] = []
    let input = document.getElementById('input5') as HTMLInputElement
    if (input != null) {
      let inputValue = input.value.trim()
      if (inputValue != '') {
        this.groups?.forEach((e) => {
          if (inputValue.toUpperCase().includes(e.number.trim().toUpperCase()))
            returnVal.push(e.id)
        })
      }
    }
    return returnVal
  }

  get SelectedAudience(): string | null {
    let returnVal = null
    let input = document.getElementById('input6') as HTMLInputElement
    if (input != null) {
      let inputValue = input.value.trim()
      if (inputValue != '') {
        this.audiences?.forEach((e) => {
          if (e.name.trim().toUpperCase() == inputValue.toUpperCase())
            returnVal = e.id
        })
      }
    }
    return returnVal
  }

  get SelectedTeacher(): string | null {
    let returnVal = null
    let input = document.getElementById('input7') as HTMLInputElement
    if (input != null) {
      let inputValue = input.value.trim()
      if (inputValue != '') {
        this.teachers?.forEach((e) => {
          if (e.fullName.trim().toUpperCase() == inputValue.toUpperCase())
            returnVal = e.id
        })
      }
    }
    return returnVal
  }

  get SelectedRepeat(): string | null {

    let input = document.getElementById('input8') as HTMLInputElement

    return input?.value
  }

  get SelectedDateStart(): string | null {

    let input = document.getElementById('input9') as HTMLInputElement

    return input?.value
  }

  get SelectedDateEnd(): string | null {

    let input = document.getElementById('input10') as HTMLInputElement

    return input?.value
  }

  // Отображаемые недели
  Weeks: Array<Week> = []

  State = State.base
  private hintTimer: number | undefined;

  IsLoadingWeek = true
  IsLoadingData = true

  openModalPair: Function | undefined

  subjects: Subject[] | undefined
  lessonTypes: LessonType[] | undefined
  weekDays = [
    {id: 0, name: 'Понедельник'},
    {id: 1, name: 'Вторник'},
    {id: 2, name: 'Среда'},
    {id: 3, name: 'Четверг'},
    {id: 4, name: 'Пятница'},
    {id: 5, name: 'Суббота'}]
  lessonTimes: LessonTime[] | undefined
  groups: Group[] | undefined
  audiences: Audience[] | undefined
  teachers: Teacher[] | undefined

  constructor(
    private editPageService: EditPageService,
    private lessonService: ILessonService,
    private subjectService: ISubjectService,
    private groupService: IGroupService,
    private audienceService: IAudienceService,
    private teacherService: ITeacherService,
    private scheduleService: IScheduleService
  ) {
    super()
  }

  setOpenModalPair = function (openModalPair: Function | undefined) {
    // @ts-ignore
    this.openModalPair = openModalPair
    // @ts-ignore
    this.Weeks?.forEach((w: Week) => {
      w.WeekTimeLines.forEach((l) => {
        l.Cells.forEach((c) => {
          c.openModalPair = openModalPair
        })
      })
    })
  }.bind(this)

  ngOnInit() {
    this.loadData().pipe(mergeMap(() => {
      return this.editPageService.initAndLoadWeek(new Date(), {
        lessonTimes: this.lessonTimes!,
        cellConstructor: () => {
          return {
            BorderBottom: true,
            Pairs: [],
            PageState: this.State,
            openModalPair: this.openModalPair,
            addPair: this.addPair,
            IsAdding: false
          }
        }
      })
    })).subscribe({
      next: weeks => {
        weeks.forEach(week => this.Weeks?.push(week))
        this.IsLoadingWeek = false
        this.IsLoadingData = false

        this.initInputs()
      },
      error: err => this.handleHttpError(err)
    })
  }

  initInputs() {
    let input1 = document.getElementById('input1')
    let datalist1 = document.getElementById('datalist1')
    let arrow1 = document.getElementById('arrow1')
    new DropDownInput(input1, datalist1, arrow1)

    let input2 = document.getElementById('input2')
    let datalist2 = document.getElementById('datalist2')
    let arrow2 = document.getElementById('arrow2')
    new DropDownInput(input2, datalist2, arrow2)

    let input3 = document.getElementById('input3')
    let datalist3 = document.getElementById('datalist3')
    let arrow3 = document.getElementById('arrow3')
    new DropDownInput(input3, datalist3, arrow3)

    let input4 = document.getElementById('input4')
    let datalist4 = document.getElementById('datalist4')
    let arrow4 = document.getElementById('arrow4')
    new DropDownInput(input4, datalist4, arrow4)

    // Группа
    let input5 = document.getElementById('input5')
    let datalist5 = document.getElementById('datalist5')
    let arrow5 = document.getElementById('arrow5')
    new GroupInput(input5, datalist5, arrow5)

    let input6 = document.getElementById('input6')
    let datalist6 = document.getElementById('datalist6')
    let arrow6 = document.getElementById('arrow6')
    new DropDownInput(input6, datalist6, arrow6)

    let input7 = document.getElementById('input7')
    let datalist7 = document.getElementById('datalist7')
    let arrow7 = document.getElementById('arrow7')
    new DropDownInput(input7, datalist7, arrow7)

    let input8 = document.getElementById('input8')
    let datalist8 = document.getElementById('datalist8')
    let arrow8 = document.getElementById('arrow8')
    new DropDownInput(input8, datalist8, arrow8)

    // Календарь
    let input9 = document.getElementById('input9')

    // Календарь
    let input10 = document.getElementById('input10')
  }

  setDisplayBlock(id: string) {
    let el = document.getElementById(id)
    if (el != null) {
      if (el.classList.contains('d-none'))
        el.classList.remove('d-none')
      if (this.hintTimer != undefined)
        clearTimeout(this.hintTimer)
      el.classList.add('fade-in-anim')
      el.classList.add('d-block')
    }
  }

  delayDisplayNone(id: string, delay: number) {
    let el = document.getElementById(id)
    if (el != null) {
      if (el.classList.contains('fade-in-anim'))
        el.classList.remove('fade-in-anim')
      this.hintTimer = setTimeout((el: HTMLElement) => {
        if (el.classList.contains('d-block'))
          el.classList.remove('d-block')
        el.classList.add('d-none')
      }, delay, el)
    }
  }

  addPair = function (cell: Cell) {
    // @ts-ignore
    this.State = State.addPair
    // @ts-ignore
    this.Weeks?.forEach((w: Week) => {
      w.WeekTimeLines.forEach((l) => {
        l.Cells.forEach((c) => {
          c.PageState = State.addPair
          if (c == cell)
            c.IsAdding = true
        })
      })
    })
  }.bind(this)

  editPair = function (pair: Pair) {
    // @ts-ignore
    if (this.State == State.base) {
      // @ts-ignore
      this.State = State.editPair
      // @ts-ignore
      document.getElementById('close-modal-btn')?.click()
      // @ts-ignore
      this.Weeks?.forEach((w: Week) => {
        w.WeekTimeLines.forEach((l) => {
          l.Cells.forEach((c) => {
            c.PageState = State.editPair
            c.Pairs.forEach((p) => {
              if (p == pair) {
                p.IsActive = true
              }
            })
          })
        })
      })
    }
  }.bind(this)

  cancelOperations() {
    this.State = State.base
    // @ts-ignore
    this.Weeks?.forEach((w: Week) => {
      w.WeekTimeLines.forEach((l) => {
        l.Cells.forEach((c) => {
          c.PageState = State.base
          c.IsAdding = false
          c.Pairs.forEach((p) => {
            p.IsActive = false
          })
        })
      })
    })
  }

  /**
   * Добавить неделю снизу
   */
  addWeek() {
    this.loadWeek(this.editPageService.getNextWeekToAdd())
  }

  /**
   * Переключиться на следующую неделю
   */
  nextWeek() {
    this.Weeks = []
    this.loadWeek(this.editPageService.getAndSetNextWeek())
  }

  /**
   * Переключиться на предыдущую неделю
   */
  previousWeek() {
    this.Weeks = []
    this.loadWeek(this.editPageService.getAndSetPreviousWeek())
  }

  /**
   * Загрузка недели
   * @param weekDate день недели, которую нужно загрузить
   */
  private loadWeek(weekDate: Date) {
    this.IsLoadingWeek = true
    this.editPageService.loadWeek(weekDate).subscribe({
      next: weeks => {
        weeks.forEach(week => this.Weeks?.push(week))
        this.IsLoadingWeek = false
      },
      error: err => this.handleHttpError(err)
    })
  }

  /**
   * Загружает данные для раскрывающихся списков
   */
  private loadData(): Observable<any> {
    return combineLatest([
      this.subjectService.fetchSubjects()
        .pipe(tap(e => this.subjects = e)),
      this.lessonService.fetchLessonTypes()
        .pipe(tap(e => this.lessonTypes = e)),
      this.scheduleService.fetchLessonTimes()
        .pipe(tap(e => this.lessonTimes = e)),
      this.groupService.fetchGroups()
        .pipe(tap(e => this.groups = e)),
      this.audienceService.fetchAudiences()
        .pipe(tap(e => this.audiences = e)),
      this.teacherService.fetchTeachers()
        .pipe(tap(e => this.teachers = e)),
    ])
  }
}
