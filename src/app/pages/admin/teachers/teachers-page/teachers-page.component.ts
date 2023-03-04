import {Component} from '@angular/core';
import {DisplayErrorComponent} from "../../../../components/util/display-error";
import {Teacher} from "../../../../models/teacher";
import {ITeacherService} from "../../../../services/i-teacher.service";

@Component({
  selector: 'app-teachers-page',
  templateUrl: './teachers-page.component.html',
  styleUrls: ['./teachers-page.component.css', '../../css/admin-modal.css']
})
export class TeachersPageComponent  extends DisplayErrorComponent {

  /**
   * Список учителей с сервера.
   * Если undefined, значит список ещё не загружен с сервера
   */
  teachers: Teacher[] | undefined

  /**
   * Объект для передачи данных в модальное окно
   */
  modal = new Modal()

  constructor(
    private teacherService: ITeacherService
  ) {
    super();
  }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
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
    this.modal.edit = false
    this.selectTeacher(Teacher.empty())
  }

  requestEditTeacher(teacher: Teacher) {
    this.modal.edit = true
    this.selectTeacher(teacher)
  }

  requestDeleteTeacher(teacher: Teacher) {
    this.selectTeacher(teacher)
  }

  deleteTeacher() {
    this.teacherService.deleteTeacher(this.modal.selected.id).subscribe({
      next: () => {
        this.refresh()
      },
      error: err => {
        this.modal.error = this.httpErrorMessageOf(err)
      }
    })
  }

  onSubmitModal() {
    this.refresh()
  }

  private selectTeacher(teacher: Teacher) {
    this.modal.selected = teacher.clone()
  }
}

class Modal {
  edit: boolean = false
  selected: Teacher = Teacher.empty()
  error: string | null = null
}
