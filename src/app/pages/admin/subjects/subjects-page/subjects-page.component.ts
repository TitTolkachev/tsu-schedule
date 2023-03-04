import {Component} from '@angular/core';
import {DisplayErrorComponent} from "../../../../components/util/display-error";
import {Subject} from "../../../../models/subject";
import {ISubjectService} from "../../../../services/i-subject.service";

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

  constructor(
    private subjectService: ISubjectService
  ) {
    super();
  }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
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
    this.modal.edit = false
    this.selectSubject(Subject.empty())
  }

  requestEditSubject(subject: Subject) {
    this.modal.edit = true
    this.selectSubject(subject)
  }

  requestDeleteSubject(subject: Subject) {
    this.selectSubject(subject)
  }

  deleteSubject() {
    this.subjectService.deleteSubject(this.modal.selected.id).subscribe({
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

  private selectSubject(subject: Subject) {
    this.modal.selected = subject.clone()
  }
}

class Modal {
  edit: boolean = false
  selected: Subject = Subject.empty()
  error: string | null = null
}
