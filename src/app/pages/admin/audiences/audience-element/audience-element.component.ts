import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Audience} from "../../../../models/audience";

@Component({
  selector: 'app-audience-element',
  templateUrl: './audience-element.component.html',
  styleUrls: ['./audience-element.component.css', '../../css/admin-modal.css']
})
export class AudienceElementComponent {

  @Input()
  audience: Audience | undefined

  @Output()
  onEdit: EventEmitter<Audience> = new EventEmitter<Audience>()

  @Output()
  onDelete: EventEmitter<Audience> = new EventEmitter<Audience>()

  editClick() {
    this.onEdit.emit(this.audience)
  }

  deleteClick() {
    this.onDelete.emit(this.audience)
  }
}
