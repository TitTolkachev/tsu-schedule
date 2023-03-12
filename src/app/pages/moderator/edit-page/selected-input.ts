import {EditPageComponent} from "./edit-page.component";
import {DayOfWeek, DayOfWeeks} from "../../../models/day-of-week";
import {format} from "date-fns";

export class SelectedInput {

  constructor(editPage: EditPageComponent) {
    this.EditPage = editPage
  }

  EditPage: EditPageComponent | undefined

  get SelectedSubject(): string | null {
    let returnVal = null
    let input = document.getElementById('input1') as HTMLInputElement
    if (input != null) {
      let inputValue = input.value.trim()
      if (inputValue != '') {
        this.EditPage?.subjects?.forEach((e) => {
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
        this.EditPage?.lessonTypes?.forEach((e) => {
          if (e.name.trim().toUpperCase() == inputValue.toUpperCase())
            returnVal = e.id
        })
      }
    }
    return returnVal
  }

  get SelectedWeekDay(): DayOfWeek | null {
    let returnVal = null
    let input = document.getElementById('input3') as HTMLInputElement
    if (input != null) {
      let inputValue = input.value.trim()
      if (inputValue != '') {
        this.EditPage?.weekDays?.forEach((e) => {
          if (e.name.trim().toUpperCase() == inputValue.toUpperCase())
            returnVal = DayOfWeeks.values[e.id]
        })
      }
    }
    return returnVal
  }

  get SelectedTime(): number | null {
    let returnVal = null
    let input = document.getElementById('input4') as HTMLInputElement
    if (input != null) {
      let inputValue = input.value.trim()
      if (inputValue != '') {
        this.EditPage?.lessonTimes?.forEach((e) => {
          let timeStart = e.startTime.hour.toString() + ':' + (e.startTime.minute < 10 ? '0' : '') + e.startTime.minute.toString()
          let timeEnd = '-' + e.endTime.hour.toString() + ':' + (e.endTime.minute < 10 ? '0' : '') + e.endTime.minute.toString()
          if (inputValue.toUpperCase().includes(timeStart.toUpperCase()) && inputValue.toUpperCase().includes(timeEnd.toUpperCase()))
            returnVal = e.lessonNumber
        })
      }
    }
    return returnVal
  }

  get SelectedGroups(): string[] {
    let returnVal: string[] = []
    let input = document.getElementById('input5') as HTMLInputElement
    if (input != null) {
      let inputValue = input.value.trim()
      if (inputValue != '') {
        this.EditPage?.groups?.forEach((e) => {
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
        this.EditPage?.audiences?.forEach((e) => {
          if (`${e.number ? e.number : ''} ${e.name ? e.name : ''}`.trim().toUpperCase() == inputValue.toUpperCase())
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
        this.EditPage?.teachers?.forEach((e) => {
          if (`${e.lastName} ${e.firstName} ${e.patronymicName}`.trim().toUpperCase() == inputValue.toUpperCase())
            returnVal = e.id
        })
      }
    }
    return returnVal
  }

  get SelectedRepeat(): number | null {

    let returnVal = null
    let input = document.getElementById('input8') as HTMLInputElement
    if (input != null) {
      let inputValue = input.value.trim()
      if (inputValue != '') {
        this.EditPage?.repeats?.forEach((e) => {
          if (`${e.name}`.trim().toUpperCase() == inputValue.toUpperCase())
            returnVal = e.id
        })
      }
    }
    return returnVal
  }

  get SelectedDateStart(): string | null {

    let input = document.getElementById('input9') as HTMLInputElement
    let d = input?.valueAsDate
    return d && !isNaN(Date.parse(d.toString()))? format(d, 'yyyy-MM-dd') : null
  }

  get SelectedDateEnd(): string | null {

    let input = document.getElementById('input10') as HTMLInputElement
    let d = input?.valueAsDate
    return d && !isNaN(Date.parse(d.toString())) ? format(d, 'yyyy-MM-dd') : null
  }

  isValidSelected(): boolean {
    return this.SelectedGroups.length > 0 &&
      this.SelectedAudience != null &&
      this.SelectedPairType != null &&
      this.SelectedTeacher != null &&
      this.SelectedSubject != null &&
      this.SelectedDateStart != null &&
      this.SelectedDateEnd != null &&
      this.SelectedWeekDay != null &&
      this.SelectedTime != null &&
      this.SelectedRepeat != null
  }
}
