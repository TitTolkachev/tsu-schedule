import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Teacher} from "../../../../models/teacher";

@Component({
  selector: 'app-teacher-element',
  templateUrl: './teacher-element.component.html',
  styleUrls: ['./teacher-element.component.css', '../../css/admin-modal.css']
})
export class TeacherElementComponent {

  @Input()
  teacher: Teacher | undefined

  @Output()
  onEdit: EventEmitter<Teacher> = new EventEmitter<Teacher>()

  @Output()
  onDelete: EventEmitter<Teacher> = new EventEmitter<Teacher>()

  editClick() {
    this.onEdit.emit(this.teacher)
  }

  deleteClick() {
    this.onDelete.emit(this.teacher)
  }

}
