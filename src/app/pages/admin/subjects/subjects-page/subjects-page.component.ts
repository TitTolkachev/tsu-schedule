import {Component} from '@angular/core';
import {DisplayErrorComponent} from "../../../../components/util/display-error";
import {Subject} from "../../../../models/subject";
import {ISubjectService} from "../../../../services/i-subject.service";
import {ErrorMessage} from "../../../../errors";

@Component({
  selector: 'app-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: ['./subjects-page.component.css', '../../css/admin-modal.css']
})
export class SubjectsPageComponent extends DisplayErrorComponent {

  /**
   * Список предметов с сервера.
   * Если undefined, значит список ещё не загружен с сервера
   */
  subjects: Subject[] | undefined

  /**
   * Объект для передачи данных в модальное окно
   */
  modal = new Modal()

  /**
   * Объект для поиска по списку
   */
  searchSubjectInput = ''

  constructor(
    private subjectService: ISubjectService
  ) {
    super();
  }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    document.getElementById("confirmation-modal-btn-close")?.click()
    document.getElementById("subject-modal-btn-close")?.click()
    this.subjectService.fetchSubjects().subscribe({
      next: subjects => {
        this.subjects = subjects
      },
      error: err => {
        this.handleHttpError(err)
      }
    })
  }

  requestCreateSubject() {
    this.selectSubject(null)
  }

  requestEditSubject(subject: Subject) {
    this.selectSubject(subject)
  }

  requestDeleteSubject(subject: Subject) {
    this.selectSubject(subject)
  }

  createSubject(form: {name: string}) {
    if (!this.validateSubject(form)) return

    this.subjectService.createSubject(
      form.name
    ).subscribe({
      next: () => {
        this.refresh()
      },
      error: err => {
        this.handleHttpError(err)
      }
    })
  }

  modifySubject(form: {id: string, name: string}) {
    if (!this.validateSubject(form)) return

    this.subjectService.modifySubject(new Subject(
      form.id,
      form.name
    )).subscribe({
      next: () => {
        this.refresh()
      },
      error: err => {
        this.handleHttpError(err)
      }
    })
  }

  deleteSubject() {
    this.subjectService.deleteSubject(this.modal.selected!.id).subscribe({
      next: () => {
        this.refresh()
      },
      error: err => {
        this.modal.error = this.httpErrorMessageOf(err)
      }
    })
  }

  private validateSubject(form: {name: string}): boolean {
    if (form.name.length === 0) {
      this.modal.error = ErrorMessage.VALIDATION_SUBJECT_NAME_EMPTY
      return false
    }
    return true
  }

  private selectSubject(subject: Subject | null) {
    this.modal.error = null
    this.modal.selected = (subject == null) ? null : subject.clone()
  }
}

class Modal {
  selected: Subject | null = null
  error: string | null = null
}
