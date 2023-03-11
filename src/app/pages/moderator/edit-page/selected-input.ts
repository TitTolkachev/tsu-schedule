import {EditPageComponent} from "./edit-page.component";

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

  get SelectedWeekDay(): string | null {
    let returnVal = null
    let input = document.getElementById('input3') as HTMLInputElement
    if (input != null) {
      let inputValue = input.value.trim()
      if (inputValue != '') {
        this.EditPage?.weekDays?.forEach((e) => {
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
          if (`${e.number} (${e.name})`.trim().toUpperCase() == inputValue.toUpperCase())
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
}
