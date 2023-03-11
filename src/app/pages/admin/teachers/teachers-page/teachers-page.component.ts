import {Component} from '@angular/core';
import {DisplayErrorComponent} from "../../../../components/util/display-error";
import {Teacher} from "../../../../models/teacher";
import {ITeacherService} from "../../../../services/i-teacher.service";
import {ErrorMessage} from "../../../../errors";

@Component({
  selector: 'app-teachers-page',
  templateUrl: './teachers-page.component.html',
  styleUrls: ['./teachers-page.component.css', '../../css/admin-modal.css']
})
export class TeachersPageComponent extends DisplayErrorComponent {

  /**
   * Список учителей с сервера.
   * Если undefined, значит список ещё не загружен с сервера
   */
  teachers: Teacher[] | undefined

  /**
   * Объект для передачи данных в модальное окно
   */
  modal = new Modal()

  /**
   * Объект для поиска списка
   */
  searchTeacherInput = ''

  constructor(
    private teacherService: ITeacherService
  ) {
    super();
  }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    document.getElementById("confirmation-modal-btn-close")?.click()
    document.getElementById("teacher-modal-btn-close")?.click()
    this.teacherService.fetchTeachers().subscribe({
      next: teachers => {
        this.teachers = teachers
      },
      error: err => {
        this.handleHttpError(err)
      }
    })
  }

  requestCreateTeacher() {
    this.selectTeacher(null)
  }

  requestEditTeacher(teacher: Teacher) {
    this.selectTeacher(teacher)
  }

  requestDeleteTeacher(teacher: Teacher) {
    this.modal.error = null
    this.selectTeacher(teacher)
  }

  createTeacher(form: {firstName: string, lastName: string, patronymicName: string}) {
    if (!this.validateTeacher(form)) return

    this.teacherService.createTeacher(
      form.firstName,
      form.lastName,
      form.patronymicName
    ).subscribe({
      next: () => {
        this.refresh()
      },
      error: err => {
        this.handleHttpError(err)
      }
    })
  }

  modifyTeacher(form: {id: string, firstName: string, lastName: string, patronymicName: string}) {
    if (!this.validateTeacher(form)) return

    this.teacherService.modifyTeacher(new Teacher(
      form.id,
      form.firstName,
      form.lastName,
      form.patronymicName
    )).subscribe({
      next: () => {
        this.refresh()
      },
      error: err => {
        this.handleHttpError(err)
      }
    })
  }

  deleteTeacher() {
    this.teacherService.deleteTeacher(this.modal.selected!.id).subscribe({
      next: () => {
        this.refresh()
      },
      error: err => {
        this.modal.error = this.httpErrorMessageOf(err)
      }
    })
  }

  private validateTeacher(form: {firstName: string, lastName: string, patronymicName: string}): boolean {
    if (form.firstName.length === 0) {
      this.modal.error = ErrorMessage.VALIDATION_TEACHER_FIRST_NAME_EMPTY
      return false
    }
    if (form.lastName.length === 0) {
      this.modal.error = ErrorMessage.VALIDATION_TEACHER_LAST_NAME_EMPTY
      return false
    }
    if (form.patronymicName.length === 0) {
      this.modal.error = ErrorMessage.VALIDATION_TEACHER_PATRONYMIC_NAME_EMPTY
      return false
    }
    return true
  }

  private selectTeacher(teacher: Teacher | null) {
    this.modal.error = null
    this.modal.selected = teacher
  }
}

class Modal {
  selected: Teacher | null = null
  error: string | null = null
}
