import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Group} from "../../../../models/group";

@Component({
  selector: 'app-group-element',
  templateUrl: './group-element.component.html',
  styleUrls: ['./group-element.component.css', '../../css/admin-modal.css']
})
export class GroupElementComponent {

  @Input()
  group: Group | undefined

  @Output()
  onEdit: EventEmitter<Group> = new EventEmitter<Group>()

  @Output()
  onDelete: EventEmitter<Group> = new EventEmitter<Group>()

  editClick() {
    this.onEdit.emit(this.group)
  }

  deleteClick() {
    this.onDelete.emit(this.group)
  }
}
