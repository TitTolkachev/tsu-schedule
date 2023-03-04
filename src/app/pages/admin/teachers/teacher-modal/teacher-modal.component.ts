import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Teacher} from "../../../../models/teacher";
import {DisplayErrorComponent} from "../../../../components/util/display-error";

@Component({
  selector: 'app-teacher-modal',
  templateUrl: './teacher-modal.component.html',
  styleUrls: ['./teacher-modal.component.css', '../../css/admin-modal.css']
})
export class TeacherModalComponent extends DisplayErrorComponent {

  private id: string | undefined

  firstName: string = ""
  lastName: string = ""
  patronymicName: string = ""

  @Input()
  set form(form: Teacher | null) {
    if (form != null) {
      this.id = form.id
      this.firstName = form.firstName
      this.lastName = form.lastName
      this.patronymicName = form.patronymicName
    }
    else {
      this.id = undefined
      this.firstName = ""
      this.lastName = ""
      this.patronymicName = ""
    }
  }

  get edit(): boolean {
    return this.id != undefined
  }

  @Output()
  create = new EventEmitter<{firstName: string, lastName: string, patronymicName: string}>()

  @Output()
  modify = new EventEmitter<{id: string, firstName: string, lastName: string, patronymicName: string}>()

  onSubmit() {
    if (this.id == undefined) {
      this.create.emit({
        firstName: this.firstName,
        lastName: this.lastName,
        patronymicName: this.patronymicName
      })
    }
    else {
      this.modify.emit({
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        patronymicName: this.patronymicName
      })
    }
  }
}
