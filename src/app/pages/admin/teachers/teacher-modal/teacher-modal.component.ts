import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ErrorMessage} from "../../../../errors";
import {Teacher} from "../../../../models/teacher";
import {ITeacherService} from "../../../../services/i-teacher.service";
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
  set form(form: Teacher | undefined) {
    if (form != undefined) {
      this.id = form.id
      this.firstName = form.firstName
      this.lastName = form.lastName
      this.patronymicName = form.patronymicName
    }
  }

  @Input()
  edit: boolean = false

  @Output()
  submit = new EventEmitter()

  constructor(
    private teacherService: ITeacherService
  ) {
    super();
  }

  onSubmit() {
    if (this.firstName.length === 0) {
      this.error = ErrorMessage.VALIDATION_TEACHER_FIRST_NAME_EMPTY
      return;
    }
    if (this.firstName.length === 0) {
      this.error = ErrorMessage.VALIDATION_TEACHER_LAST_NAME_EMPTY
      return;
    }
    if (this.firstName.length === 0) {
      this.error = ErrorMessage.VALIDATION_TEACHER_PATRONYMIC_NAME_EMPTY
      return;
    }

    let observable
    if (this.edit) {
      observable = this.teacherService.modifyTeacher(new Teacher(
        this.id!,
        this.firstName,
        this.lastName,
        this.patronymicName
      ))
    }
    else {
      observable = this.teacherService.createTeacher(
        this.firstName,
        this.lastName,
        this.patronymicName
      )
    }
    observable.subscribe({
      next: () => {
        this.submit.emit()
      },
      error: err => {
        this.handleHttpError(err)
      }
    })
  }
}
