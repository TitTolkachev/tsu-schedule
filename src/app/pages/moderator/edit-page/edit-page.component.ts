import {AfterContentInit, Component} from '@angular/core';
import {DropDownInput} from "./drop-down-input";
import {GroupInput} from "./group-input";
import {State} from "./models/State";
import {Pair} from "./models/Pair";
import {Week} from "./models/Week";
import {Cell} from "./models/Cell";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})

export class EditPageComponent implements AfterContentInit {

  private hintTimer: number | undefined;

  // Отображаемые недели
  Weeks: Array<Week> | undefined

  State = State.base

  IsLoading = false

  openModalPair: Function | undefined

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

  ngAfterContentInit() {

    // TODO(Сделать загрузку недели, притом раньше, чем AfterContentInit)
    this.loadWeek()

    let input1 = document.getElementById('input1')
    let datalist1 = document.getElementById('datalist1')
    let arrow1 = document.getElementById('arrow1')
    let ddi1 = new DropDownInput(input1, datalist1, arrow1)

    let input2 = document.getElementById('input2')
    let datalist2 = document.getElementById('datalist2')
    let arrow2 = document.getElementById('arrow2')
    let ddi2 = new DropDownInput(input2, datalist2, arrow2)

    let input3 = document.getElementById('input3')
    let datalist3 = document.getElementById('datalist3')
    let arrow3 = document.getElementById('arrow3')
    let ddi3 = new DropDownInput(input3, datalist3, arrow3)

    let input4 = document.getElementById('input4')
    let datalist4 = document.getElementById('datalist4')
    let arrow4 = document.getElementById('arrow4')
    let ddi4 = new DropDownInput(input4, datalist4, arrow4)

    // Группа
    let input5 = document.getElementById('input5')
    let datalist5 = document.getElementById('datalist5')
    let arrow5 = document.getElementById('arrow5')
    let ddi5 = new GroupInput(input5, datalist5, arrow5)

    let input6 = document.getElementById('input6')
    let datalist6 = document.getElementById('datalist6')
    let arrow6 = document.getElementById('arrow6')
    let ddi6 = new DropDownInput(input6, datalist6, arrow6)

    let input7 = document.getElementById('input7')
    let datalist7 = document.getElementById('datalist7')
    let arrow7 = document.getElementById('arrow7')
    let ddi7 = new DropDownInput(input7, datalist7, arrow7)

    let input8 = document.getElementById('input8')
    let datalist8 = document.getElementById('datalist8')
    let arrow8 = document.getElementById('arrow8')
    let ddi8 = new DropDownInput(input8, datalist8, arrow8)

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

  addWeek() {
    // TODO(Подгрузить еще неделю в массив просматриваемых недель)
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
        })
      })
    })
  }

  loadWeek() {
    this.Weeks = [
      {
        WeekDate: '30 января 2023 - 4 февраля 2023 • 23 неделя',
        WeekDays: [1, 2, 3, 4, 5, 6],
        WeekTimeLines: [
          {
            Cells: [
              {
                BorderBottom: true,

                Pairs: [],

                PageState: this.State,

                openModalPair: this.openModalPair,

                addPair: this.addPair,

                IsAdding: false
              },
              {
                BorderBottom: true,

                Pairs: [],

                PageState: this.State,

                openModalPair: this.openModalPair,

                addPair: this.addPair,

                IsAdding: false
              },
              {
                BorderBottom: true,

                Pairs: [
                  new Pair('Матанализ', '228 аудитория', '972101, 972102', 'Лекция', 'Даммер Диана Дамировна', '', '8:45 - 10:20'),
                  new Pair('МКН часть 3', '302 аудитория', '972101, 972102, 972103', 'Лекция', 'Даммер Диана Дамировна', '', '8:45 - 10:20')
                ],

                PageState: this.State,

                openModalPair: this.openModalPair,

                addPair: this.addPair,

                IsAdding: false
              },
              {
                BorderBottom: true,

                Pairs: [],

                PageState: this.State,

                openModalPair: this.openModalPair,

                addPair: this.addPair,

                IsAdding: false
              },
              {
                BorderBottom: true,

                Pairs: [],

                PageState: this.State,

                openModalPair: this.openModalPair,

                addPair: this.addPair,

                IsAdding: false
              },
              {
                BorderBottom: true,

                Pairs: [],

                PageState: this.State,

                openModalPair: this.openModalPair,

                addPair: this.addPair,

                IsAdding: false
              },
            ],
            TimeStart: '8:45',
            TimeEnd: '10:20'
          },
          {
            Cells: [
              {
                BorderBottom: true,

                Pairs: [],

                PageState: this.State,

                openModalPair: this.openModalPair,

                addPair: this.addPair,

                IsAdding: false
              },
              {
                BorderBottom: true,

                Pairs: [],

                PageState: this.State,

                openModalPair: this.openModalPair,

                addPair: this.addPair,

                IsAdding: false
              },
              {
                BorderBottom: true,

                Pairs: [],

                PageState: this.State,

                openModalPair: this.openModalPair,

                addPair: this.addPair,

                IsAdding: false
              },
              {
                BorderBottom: true,

                Pairs: [],

                PageState: this.State,

                openModalPair: this.openModalPair,

                addPair: this.addPair,

                IsAdding: false
              },
              {
                BorderBottom: true,

                Pairs: [],

                PageState: this.State,

                openModalPair: this.openModalPair,

                addPair: this.addPair,

                IsAdding: false
              },
              {
                BorderBottom: true,

                Pairs: [],

                PageState: this.State,

                openModalPair: this.openModalPair,

                addPair: this.addPair,

                IsAdding: false
              },
            ],
            TimeStart: '8:45',
            TimeEnd: '10:20'
          }
        ]
      }
    ]
  }
}
