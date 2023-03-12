import {Component, OnInit, ViewChild} from '@angular/core';
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
import {combineLatest, Observable, tap} from "rxjs";
import {IGroupService} from "../../../services/i-group.service";
import {IAudienceService} from "../../../services/i-audience.service";
import {ITeacherService} from "../../../services/i-teacher.service";
import {IScheduleService} from "../../../services/i-schedule.service";
import {SelectedInput} from "./selected-input";
import {Event} from "@angular/router";
import {ConfirmMode} from "./models/ConfirmMode";
import {LessonEditService} from "../../../services/lesson-edit.service";
import {ScheduleErrorComponent} from "./components/schedule-error/schedule-error.component";
import {format} from "date-fns";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent extends DisplayErrorComponent implements OnInit {

  @ViewChild(ScheduleErrorComponent)
  scheduleErrorComponent: ScheduleErrorComponent | undefined

  // Отображаемые недели
  Weeks: Array<Week> = []

  ConfirmMode = ConfirmMode.none
  State = State.base
  private hintTimer: number | undefined;

  IsLoadingWeek = false
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
  repeats = [
    {id: 1, name: 'Повторять каждую неделю'},
    {id: 2, name: 'Повторять каждую 2 неделю'},
    {id: 3, name: 'Повторять каждую 3 неделю'},
    {id: 4, name: 'Повторять каждую 4 неделю'}
  ]

  SelectedPair: Pair | undefined
  SelectedInputs: SelectedInput = new SelectedInput(this)

  constructor(
    private editPageService: EditPageService,
    private lessonEditService: LessonEditService,
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
    // Загрузка данных
    this.loadData().subscribe({
      next: () => {
        this.editPageService.init(new Date(), {
          lessonTimes: this.lessonTimes!,
          cellConstructor: () => {
            return {
              BorderBottom: true,
              Pairs: [],
              PageState: this.State,
              ShowPluses: this.ShowPluses,
              openModalPair: this.openModalPair,
              addPair: this.addPair,
              IsAdding: false,
              DayOfWeek: undefined,
              CellDate: undefined,
              CellTime: undefined
            }
          }
        })
        this.initInputs()
        this.loadWeek(new Date())
        this.IsLoadingData = false
      },
      error: err => this.handleHttpError(err)
    })
  }

  IsGroupSelected = false
  setIsGroupSelected = function (v: boolean) {
    // @ts-ignore
    this.IsGroupSelected = v
  }.bind(this)
  IsAudienceSelected = false
  setIsAudienceSelected = function (v: boolean) {
    // @ts-ignore
    this.IsAudienceSelected = v
  }.bind(this)
  IsTeacherSelected = false
  setIsTeacherSelected = function (v: boolean) {
    // @ts-ignore
    this.IsTeacherSelected = v
  }.bind(this)


  /**
   * Заполнены ли нужные поля, что показывать плюсики
   */
  get ShowPluses(): boolean {
    return this.IsGroupSelected && this.IsAudienceSelected && this.IsTeacherSelected
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
    new GroupInput(input5, datalist5, arrow5, this.setIsGroupSelected)

    let input6 = document.getElementById('input6')
    let datalist6 = document.getElementById('datalist6')
    let arrow6 = document.getElementById('arrow6')
    new DropDownInput(input6, datalist6, arrow6, this.setIsAudienceSelected)

    let input7 = document.getElementById('input7')
    let datalist7 = document.getElementById('datalist7')
    let arrow7 = document.getElementById('arrow7')
    new DropDownInput(input7, datalist7, arrow7, this.setIsTeacherSelected)

    let input8 = document.getElementById('input8')
    let datalist8 = document.getElementById('datalist8')
    let arrow8 = document.getElementById('arrow8')
    new DropDownInput(input8, datalist8, arrow8)

    // Календарь
    let input9 = document.getElementById('input9')

    // Календарь
    let input10 = document.getElementById('input10')
  }

  onOptionClick(inputId: string, datalistId: string, ev: MouseEvent) {
    let input = document.getElementById(inputId) as HTMLInputElement
    let datalist = document.getElementById(datalistId)
    let option = ev.target
    if (input != null && datalist != null) {
      // @ts-ignore
      input.value = option.value
      datalist.style.display = 'none'
      input.style.borderRadius = "5px"
    }
    let event = new Event('change', {
      bubbles: true,
      cancelable: true,
    });
    input?.dispatchEvent(event);
  }

  SelectedGroupsList = []
  onGroupOptionClick = function (ev: MouseEvent) {
    let input = document.getElementById('input5') as HTMLInputElement
    let datalist = document.getElementById('datalist5')
    let option = ev.target

    if (input != null && datalist != null) {
      // @ts-ignore
      if (this.SelectedGroupsList.includes(option.value)) {
        // @ts-ignore
        this.SelectedGroupsList.splice(this.SelectedGroupsList.indexOf(option.value), 1)
        // @ts-ignore
        option?.classList.remove('selected-group-option')
      } else {
        // @ts-ignore
        this.SelectedGroupsList.push(option.value)
        // @ts-ignore
        option?.classList.add('selected-group-option')
      }

      // @ts-ignore
      this.SelectedGroupsList.sort()

      // @ts-ignore
      if (this.SelectedGroupsList.length > 0) {
        // @ts-ignore
        input.value = this.SelectedGroupsList[0]
        // @ts-ignore
        for (let i = 1; i < this.SelectedGroupsList.length; i++) {
          // @ts-ignore
          input.value = input.value + ', ' + this.SelectedGroupsList[i]
        }
      } else
        // @ts-ignore
        input.value = ''
    }
  }.bind(this)

  buildLessonTime(t: LessonTime) {
    return (t.startTime.hour < 10 ? '0' : '') + t.startTime.hour + ':' + (t.startTime.minute < 10 ? '0' : '') + t.startTime.minute
      + '-' + (t.endTime.hour < 10 ? '0' : '') + t.endTime.hour + ':' + (t.endTime.minute < 10 ? '0' : '') + t.endTime.minute
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
    let input1 = document.getElementById('input1') as HTMLInputElement
    let input2 = document.getElementById('input2') as HTMLInputElement
    let input3 = document.getElementById('input3') as HTMLInputElement
    let input4 = document.getElementById('input4') as HTMLInputElement
    let input8 = document.getElementById('input8') as HTMLInputElement
    let input9 = document.getElementById('input9') as HTMLInputElement
    let input10 = document.getElementById('input10') as HTMLInputElement
    if (input1)
      input1.value = ''
    if (input2)
      input2.value = ''
    if (input3) {
      // @ts-ignore
      input3.value = <string>this.weekDays[cell.DayOfWeek]?.name
    }
    if (input4) {
      // @ts-ignore
      input4.value = this.buildLessonTime(cell.CellTime)
    }
    if (input8) { // @ts-ignore
      input8.value = this.repeats[0].name
    }
    if (input9 && cell.CellDate) {
      input9.value = format(cell.CellDate, 'yyyy-MM-dd')
    }
    if (input10 && cell.CellDate) {
      input10.value = format(cell.CellDate, 'yyyy-MM-dd')
    }

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
      // @ts-ignore
      this.SelectedPair = pair

      let input1 = document.getElementById('input1') as HTMLInputElement
      let input2 = document.getElementById('input2') as HTMLInputElement
      let input3 = document.getElementById('input3') as HTMLInputElement
      let input4 = document.getElementById('input4') as HTMLInputElement
      let input5 = document.getElementById('input5') as HTMLInputElement
      let input6 = document.getElementById('input6') as HTMLInputElement
      let input7 = document.getElementById('input7') as HTMLInputElement
      let input8 = document.getElementById('input8') as HTMLInputElement
      let input9 = document.getElementById('input9') as HTMLInputElement
      let input10 = document.getElementById('input10') as HTMLInputElement
      if (input1) {
        input1.value = pair.Name
      }
      if (input2) {
        input2.value = pair.Type ? pair.Type : ''
      }
      if (input3) {
        // @ts-ignore
        input3.value = pair.DayOfWeek != null ? this.weekDays[pair.DayOfWeek]?.name : ''
      }
      if (input4) {
        input4.value = pair.Time ? pair.Time.replace(/ /g, '') : ''
      }
      if (input5) {
        input5.value = pair.Groups ? pair.Groups : ''
      }
      if (input6) {
        input6.value = pair.Placement ? pair.Placement : ''
      }
      if (input7) {
        input7.value = pair.Teacher ? pair.Teacher : ''
      }
      if (input8) {
        // @ts-ignore
        input8.value = pair.Repeat ? this.repeats[pair.Repeat - 1]?.name : ''
      }
      if (input9) {
        input9.valueAsDate = <Date | null>pair.GroupDateStart
      }
      if (input10) {
        input10.valueAsDate = <Date | null>pair.GroupDateEnd
      }
    }
  }.bind(this)

  /**
   * Изменить все пары в группе
   */
  applyChangesForAllPairsInGroup = function () {
    // @ts-ignore
    this.lessonEditService.modifyGroupPair(this.SelectedPair, this.SelectedInputs).subscribe(this.observerPair)
  }.bind(this)

  /**
   * Изменить только выбранную пару
   */
  applyChangesForSelectedPair = function () {
    // @ts-ignore
    this.lessonEditService.modifyPair(this.SelectedPair, this.SelectedInputs).subscribe(this.observerPair)
  }.bind(this)

  /**
   * Удалить все пары в группе
   */
  deleteAllPairsInGroup = function () {
    // @ts-ignore
    this.lessonEditService.deleteGroupPair(this.SelectedPair).subscribe(this.observerPair)
  }.bind(this)

  /**
   * Удалить только выбранную пару
   */
  deleteSelectedPairFromGroup = function () {
    // @ts-ignore
    this.lessonEditService.deletePair(this.SelectedPair).subscribe(this.observerPair)
  }.bind(this)

  ConfirmFunctions: Function[] = [this.applyChangesForAllPairsInGroup,
    this.applyChangesForSelectedPair,
    this.deleteAllPairsInGroup,
    this.deleteSelectedPairFromGroup];

  /**
   * Нажатие на кнопку сохранить изменения
   */
  onApplyChangesClick() {
    // Если в режиме добавления пары
    if (this.State == State.addPair) {
      this.lessonEditService.createPair(this.SelectedInputs).subscribe(this.observerPair)
      return
    }
    // Если в режиме редактирования пары
    if (this.State == State.editPair) {
      this.ConfirmMode = ConfirmMode.change
      document.getElementById('confirmModalOpenBtn')?.click()
      return
    }
  }

  /**
   * Нажатие на кнопку удалить в режиме редактирования пары
   */
  onDeleteClick() {
    this.ConfirmMode = ConfirmMode.delete
    document.getElementById('confirmModalOpenBtn')?.click()
  }

  /**
   * Сброс состояния
   */
  cancelOperations() {
    this.State = State.base
    this.SelectedPair = undefined
    this.ConfirmMode = ConfirmMode.none
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

  // Наблюдатель для действий с парами
  private observerPair = {
    // Обновить экран, если действие с парой прошло успешно
    next: () => this.refresh(),
    // Отобразить ошибку в модальном окне, если действие с парой прошло с ошибкой
    error: (err: Error) => this.handleModalError(err)
  }

  /**
   * Обновить расписание
   */
  refresh() {
    this.cancelOperations()
    this.Weeks = []
    this.loadWeek(this.editPageService.currentWeek)
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
    this.cancelOperations()
    this.Weeks = []
    this.loadWeek(this.editPageService.getAndSetNextWeek())
  }

  /**
   * Переключиться на предыдущую неделю
   */
  previousWeek() {
    this.cancelOperations()
    this.Weeks = []
    this.loadWeek(this.editPageService.getAndSetPreviousWeek())
  }

  /**
   * Загрузка недели
   * @param weekDate день недели, которую нужно загрузить
   */
  private loadWeek(weekDate: Date) {
    if (this.SelectedInputs.SelectedGroups.length == 0
      && this.SelectedInputs.SelectedTeacher == null
      && this.SelectedInputs.SelectedAudience == null) {
      if (this.lessonTimes == undefined) {
        throw Error("lesson times cannot be undefined")
      }
      this.Weeks.push(this.editPageService.buildWeek(this.lessonTimes, weekDate))
      return
    }

    this.IsLoadingWeek = true
    this.editPageService.loadWeek(
      weekDate,
      this.SelectedInputs.SelectedGroups,
      this.SelectedInputs.SelectedTeacher,
      this.SelectedInputs.SelectedAudience
    ).subscribe({
      next: weeks => {
        weeks.forEach(week => this.Weeks.push(week))
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

  private handleModalError(err: Error) {
    if (this.scheduleErrorComponent != undefined) {
      this.scheduleErrorComponent.error = this.httpErrorMessageOf(err)
    }
    document.getElementById("openErrorModal")?.click()
  }

  protected override handleHttpError(err: Error) {
    this.IsLoadingData = false
    this.IsLoadingWeek = false
    // TODO возможно не лучший вариант показывать ошибку загрузки списков или распиания в модальном окне
    this.handleModalError(err)
  }
}
