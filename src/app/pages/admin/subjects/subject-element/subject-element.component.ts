import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Subject} from "../../../../models/subject";

@Component({
  selector: 'app-subject-element',
  templateUrl: './subject-element.component.html',
  styleUrls: ['./subject-element.component.css', '../../css/admin-modal.css']
})
export class SubjectElementComponent {

  @Input()
  subject: Subject | undefined

  @Output()
  onEdit: EventEmitter<Subject> = new EventEmitter<Subject>()

  @Output()
  onDelete: EventEmitter<Subject> = new EventEmitter<Subject>()

  editClick() {
    this.onEdit.emit(this.subject)
  }

  deleteClick() {
    this.onDelete.emit(this.subject)
  }

}
