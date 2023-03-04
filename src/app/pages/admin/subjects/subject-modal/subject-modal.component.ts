import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ErrorMessage} from "../../../../errors";
import {Subject} from "../../../../models/subject";
import {DisplayErrorComponent} from "../../../../components/util/display-error";
import {ISubjectService} from "../../../../services/i-subject.service";

@Component({
  selector: 'app-subject-modal',
  templateUrl: './subject-modal.component.html',
  styleUrls: ['./subject-modal.component.css', '../../css/admin-modal.css']
})
export class SubjectModalComponent extends DisplayErrorComponent {

  private id: string | undefined

  name: string = ""

  @Input()
  set form(form: Subject | undefined) {
    if (form != undefined) {
      this.id = form.id
      this.name = form.name
    }
  }

  @Input()
  edit: boolean = false

  @Output()
  submit = new EventEmitter()

  constructor(
    private subjectService: ISubjectService
  ) {
    super();
  }

  onSubmit() {
    if (this.name.length === 0) {
      this.error = ErrorMessage.VALIDATION_SUBJECT_NAME_EMPTY
      return;
    }

    let observable
    if (this.edit) {
      observable = this.subjectService.modifySubject(new Subject(
        this.id!,
        this.name
      ))
    }
    else {
      observable = this.subjectService.createSubject(
        this.name
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
