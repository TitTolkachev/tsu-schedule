import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Group} from "../../../../models/group";
import {DisplayErrorComponent} from "../../../../components/util/display-error";

@Component({
  selector: 'app-group-modal',
  templateUrl: './group-modal.component.html',
  styleUrls: ['./group-modal.component.css', '../../css/admin-modal.css']
})
export class GroupModalComponent extends DisplayErrorComponent {

  private id: string | undefined

  number: string = ""

  @Input()
  set form(form: Group | null) {
    if (form != null) {
      this.id = form.id
      this.number = form.number
    }
    else {
      this.id = undefined
      this.number = ""
    }
  }

  get edit(): boolean {
    return this.id != undefined
  }

  @Output()
  create = new EventEmitter<{number: string}>()

  @Output()
  modify = new EventEmitter<{id: string, number: string}>()

  onSubmit() {
    if (this.id == undefined) {
      this.create.emit({
        number: this.number
      })
    }
    else {
      this.modify.emit({
        id: this.id,
        number: this.number
      })
    }
  }
}
